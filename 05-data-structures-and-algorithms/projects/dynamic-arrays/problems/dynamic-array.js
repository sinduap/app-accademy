class DynamicArray {
  data = null;
  #length = 0;

  constructor(defaultSize = 4) {
    // Your code here
    this.capacity = defaultSize;
    this.data = Array(this.capacity).fill(undefined);
  }

  get length() {
    return this.#length;
  }

  set length(val) {
    this.#length = val;
  }

  read(index) {
    // Your code here
    return this.data.at(index);
  }

  unshift(val) {
    // Your code here
    const firstEmptyIndex = this.#length;
    this.length++;

    for (let i = firstEmptyIndex; i >= 0; i--) {
      if (i === 0) {
        this.data[i] = val;
      } else {
        this.data[i] = this.data[i - 1];
      }
    }
  }
}

module.exports = DynamicArray;
