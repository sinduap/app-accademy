const { Character } = require('./character');

class Enemy extends Character {
  cooldown = 3000;
  items = [];
  attackTarget = null;

  constructor(name, description, currentRoom) {
    super(name, description, currentRoom);
  }

  setPlayer(player) {
    this.player = player;
  }

  #getRandomRoom() {
    const keys = Object.keys(this.currentRoom.exits);
    const randomKey =
      keys.length > 1 ? Math.floor(Math.random() * keys.length) : 0;

    return this.currentRoom.exits[keys[randomKey]];
  }

  randomMove() {
    this.currentRoom = this.#getRandomRoom();
    this.cooldown += 3000;
    this.act();
  }

  takeSandwich() {
    let sandwichIdx = this.currentRoom.items.indexOf('sandwich');
    const sandwich = this.currentRoom.items.splice(sandwichIdx, 1);
    if (sandwich) {
      this.items.push(sandwich);
      this.cooldown += 3000;
      console.log('The enemy took your sandwich!');
    }
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = () => {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    if (this.attackTarget === null) return null;

    this.attackTarget.applyDamage(this.strength);
    console.log(`The ${this.name} hits you for ${this.strength} damage.`);
    this.cooldown += 3000;
    this.act();
  }

  applyDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.die();
    } else {
      this.attackTarget = this.player;
      this.act();
    }
  }

  act() {
    if (this.health <= 0) return;

    const rand = Math.floor(Math.random() * 5);

    if (this.cooldown > 0) {
      this.rest();
    } else {
      if (rand > 2) {
        this.scratchNose();
      } else if (this.currentRoom.items.length > 0) {
        this.takeSandwich();
      } else if (rand === 1) {
        this.attackTarget = this.player;
        this.attack();
      } else {
        this.randomMove();
      }
    }
  }

  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);
  }
}

module.exports = {
  Enemy,
};
