const { SinglyLinkedNode } = require('./01-singly-linked-list');

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    // Add node to end of queue (linked list)
    // Write your hypothesis on the time complexity of this method here

    // time complexity = O(1)
    let newNode = new SinglyLinkedNode(val);
    this.length++;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.length;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    return this.length;
  }

  dequeue() {
    // Remove node from front of queue (linked list)
    // Write your hypothesis on the time complexity of this method here

    // time complexity = O(1)
    if (!this.length) return null;

    let dequeuedValue;

    if (this.length === 1) {
      dequeuedValue = this.head.value;
      this.tail = null;
      this.head = null;
    }

    if (this.length > 1) {
      dequeuedValue = this.head.value;
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;

    return dequeuedValue;
  }
}

module.exports = {
  Queue,
  SinglyLinkedNode,
};
