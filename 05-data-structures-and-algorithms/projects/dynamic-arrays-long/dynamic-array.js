class DynamicArray {
  data = null;
  #length = 0;

  constructor(defaultSize = 4) {
    // Your code here
    this.capacity = defaultSize;
    this.data = Array(this.capacity);
  }

  get length() {
    return this.#length;
  }

  set length(val) {
    this.#length = val;
    this.data.length = val;
  }

  read(index) {
    // Your code here
    return this.data.at(index);
  }

  push(val) {
    // Your code here
    if (this.#length === this.capacity) this.resize();

    this.data[this.#length] = val;
    this.#length++;
  }

  pop() {
    // Your code here
    if (this.#length === 0) return undefined;

    const val = this.data[this.#length - 1];
    this.data[this.#length - 1] = undefined;
    this.#length--;
    return val;
  }

  shift() {
    // Your code here
    if (this.#length === 0) return undefined;

    const val = this.data[0];
    for (let i = 0; i < this.#length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.#length--;
    return val;
  }

  unshift(val) {
    // Your code here
    if (this.#length === this.capacity) this.resize();

    for (let i = this.#length; i >= 0; i--) {
      if (i === 0) {
        this.data[i] = val;
      } else {
        this.data[i] = this.data[i - 1];
      }
    }
    this.#length++;
  }

  indexOf(val) {
    // Your code here
    for (let i = 0; i < this.#length; i++) {
      if (this.data[i] === val) return i;
    }

    return -1;
  }

  resize() {
    // Your code here
    this.capacity *= 2;
    this.data.length = this.capacity;
  }
}

module.exports = DynamicArray;
