// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here

    // Add node of val to head of linked list
    let newNode = new DoublyLinkedNode(val);
    this.length++;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.head;
    }

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;

    return this.head;
  }

  addToTail(val) {
    // Add node of val to tail of linked list
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(1)
    let newNode = new DoublyLinkedNode(val);
    this.length++;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.head;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    return this.head;
  }

  removeFromHead() {
    // Remove node at head
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(1)
    if (this.length === 0) return;
    let removedHead = this.head;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    this.length--;
    return removedHead.value;
  }

  removeFromTail() {
    // Remove node at tail
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(1)
    if (this.length === 0) return;
    let removedTail = this.tail;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    this.length--;
    return removedTail.value;
  }

  peekAtHead() {
    // Return value of head node
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(1)
    return this.head?.value;
  }

  peekAtTail() {
    // Return value of tail node
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(1)
    return this.tail?.value;
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
