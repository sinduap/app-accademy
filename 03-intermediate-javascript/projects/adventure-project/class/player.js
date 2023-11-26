class Player {
  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log('You cannot move in that direction');
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    // Fill this in
    const takenItemIdx = this.currentRoom.items.findIndex(
      item => item.name === itemName
    );

    const [takenItem] = this.currentRoom.items.splice(takenItemIdx, 1);
    this.items.push(takenItem);

    return takenItem;
  }

  dropItem(itemName) {
    // Fill this in
    const droppedItemIdx = this.items.findIndex(item => item.name === itemName);
    const [droppedItem] = this.items.splice(droppedItemIdx, 1);

    this.currentRoom.items.push(droppedItem);
    return droppedItem;
  }

  eatItem(itemName) {
    // Fill this in
    const item = this.items.filter(
      item => item.name === itemName && item.isFood
    );
    if (!item) return;
    this.items = this.items.filter(
      item => !(item.name === itemName && item.isFood)
    );
  }

  getItemByName(name) {
    // Fill this in
    return this.items.filter(item => item.name === name)[0];
  }
}

module.exports = {
  Player,
};
