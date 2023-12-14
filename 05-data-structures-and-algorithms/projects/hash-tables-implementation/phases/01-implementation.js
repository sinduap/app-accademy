class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.capacity = numBuckets;
    this.data = Array(numBuckets).fill(null);
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }

  insert(key, value) {
    // Your code here
    const position = this.hashMod(key);
    const pair = new KeyValuePair(key, value);

    let currPair = this.data[position];

    if (currPair) {
      while (currPair) {
        if (currPair.key === key) {
          currPair.value = value;
          return;
        }
        currPair = currPair.next;
      }

      pair.next = this.data[position];
    }
    this.data[position] = pair;
    this.count++;
  }

  read(key) {
    // Your code here
    const position = this.hashMod(key);

    let currPair = this.data[position];
    while (currPair) {
      if (currPair.key === key) {
        return currPair.value;
      }
      currPair = currPair.next;
    }
  }

  resize() {
    // Your code here
    const prevData = this.data;
    this.count = 0;
    this.capacity *= 2;
    this.data = new Array(this.capacity).fill(null);

    for (let i = 0; i < this.capacity / 2; i++) {
      let currPair = prevData[i];

      while (currPair) {
        this.insert(currPair.key, currPair.value);
        currPair = currPair.next;
      }
    }
  }

  delete(key) {
    // Your code here
    const position = this.hashMod(key);
    let currPair = this.data[position];

    if (!currPair) return 'Key not found';

    if (currPair.key === key) {
      currPair = currPair.next;
      this.data[position] = currPair;
      this.count--;
      return;
    }

    while (currPair) {
      if (currPair.next?.key === key) {
        currPair.next = currPair.next.next;
        this.count--;
        return;
      }

      currPair = currPair.next;
    }

    return 'Key not found';
  }

  static comparePair(pair1, pair2) {
    while (pair1) {
      if (pair1?.key !== pair2?.key || pair1?.value !== pair2?.value) {
        return false;
      }
      pair1 = pair1.next;
      pair2 = pair2.next;
    }
    return true;
  }

  static compareHash(hashTables1, hashTables2) {
    let result = true;
    for (let i = 0; i < hashTables1.data.length; i++) {
      if (!this.comparePair(hashTables1.data[i], hashTables2.data[i])) {
        return false;
      }
    }
    return result;
  }
}

module.exports = HashTable;
