class DoublyLinkedListNode {
  constructor(val, prev = null, next = null) {
    this.value = val;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    const newNode = new DoublyLinkedListNode(val, null, this.head);
    if (this.head) this.head.prev = newNode;
    if (!this.tail) this.tail = newNode;
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    // Your code here
    const newNode = new DoublyLinkedListNode(val, this.tail);
    if (this.tail) this.tail.next = newNode;
    if (!this.head) this.head = newNode;
    this.tail = newNode;
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    process.stdout.write('NULL');
  }
}

module.exports = DoublyLinkedList;
