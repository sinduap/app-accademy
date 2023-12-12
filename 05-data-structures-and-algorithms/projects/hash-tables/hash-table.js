const { sha256 } = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  count = 0;

  constructor(numBuckets = 4) {
    // Your code here
    this.capacity = numBuckets;
    this.data = Array(numBuckets).fill(null);
  }

  hash(key) {
    // Your code here
    return parseInt(sha256(key).slice(0, 8), 16);
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    const pair = new KeyValuePair(key, value);
    const position = this.hashMod(key);

    if (this.data[position]) {
      const error = new Error(
        'hash collision or same key/value pair already exists!'
      );
      throw error;
    }

    this.data[position] = pair;
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const pair = new KeyValuePair(key, value);
    const position = this.hashMod(key);

    if (this.data[position]) {
      pair.next = this.data[position];
    }

    this.data[position] = pair;
    this.count++;
  }

  insert(key, value) {
    // Your code here
    if (key)
      try {
        this.insertNoCollisions(key, value);
      } catch (err) {
        const position = this.hashMod(key);
        let currLinkedList = this.data[position];
        let targetPair;

        while (currLinkedList) {
          if (currLinkedList.key === key) {
            targetPair = currLinkedList;
            currLinkedList.value = value;
            return;
          }
          currLinkedList = currLinkedList.next;
        }

        this.insertWithHashCollisions(key, value);
      }
  }
}

module.exports = HashTable;
