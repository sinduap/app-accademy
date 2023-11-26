class Character {
  items = [];
  health = 100;
  strength = 10;

  constructor(name, description, currentRoom) {
    // Fill this in
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
  }

  applyDamage(amount) {
    // Fill this in
    this.health -= amount;
    if (this.health === 0) this.die();
  }

  die() {
    // Fill this in
    this.currentRoom.items = [...this.currentRoom.items, ...this.items];
    this.items = [];
    this.currentRoom = null;
  }
}

module.exports = {
  Character,
};
