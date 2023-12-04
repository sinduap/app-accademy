// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
    this.length = 0;
  }

  addToHead(val) {
    // Time complexity : O(1)
    this.length++;
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  addToTail(val) {
    // Time complexity : O(n)
    this.length++;
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
    return this.head;
  }

  listLength() {
    // Returns the length of the list
    // Implement in O(n) and in O(1) time complexity

    // Time complexity : O(n)
    // let length = 0;
    // let curr = this.head;

    // while (curr) {
    //   length++;
    //   curr = curr.next;
    // }

    // return length;

    // Time complexity : O(1)
    return this.length;
  }

  sumOfNodes() {
    // Returns the sum of the values of all the nodes
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(n)
    if (!this.head) return null;

    let sum = 0;
    let curr = this.head;

    while (curr) {
      sum += curr.value;
      curr = curr.next;
    }

    return sum;
  }

  averageValue() {
    // Returns the average value of all the nodes
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(1)
    if (!this.head) return null;

    return this.sumOfNodes() / this.listLength();
  }

  findNthNode(n) {
    // Returns the node at the nth index from the head
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(n)
    if (!n || n > this.listLength() || !this.head) return null;

    let count = 0;
    let curr = this.head;
    while (curr) {
      if (count === n) return curr;
      curr = curr.next;
      count++;
    }
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(n)
    const nthMidNode = Math.floor((this.listLength() - 1) / 2);

    return this.findNthNode(nthMidNode);
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(n)
    let reversed = new this.constructor();
    let curr = this.head;

    while (curr) {
      reversed.addToHead(curr.value);
      curr = curr.next;
    }

    return reversed;
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(n)
    let reversed = this.reverse();
    this.head = reversed.head;
    return this;
  }
}

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
    // Time complexity : O(1)
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

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(n)
    const nthMidNode = Math.floor((this.length - 1) / 2);

    return this.findNthNode(nthMidNode);
  }

  findNthNode(n) {
    // Returns the node at the nth index from the head
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(n)
    if (!n || n > this.length || !this.head) return null;

    let count = 0;
    let curr = this.head;
    while (curr) {
      if (count === n) return curr;
      curr = curr.next;
      count++;
    }
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(n)
    let reversed = new this.constructor();
    let curr = this.head;

    while (curr) {
      reversed.addToHead(curr.value);
      curr = curr.next;
    }

    return reversed;
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(n)
    let newLinkedList = new this.constructor();

    let curr = this.head;

    while (curr) {
      newLinkedList.addToHead(curr.value);
      curr = curr.next;
    }

    this.head = newLinkedList.head;
    this.tail = newLinkedList.tail;

    return this;
  }
}

module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList,
};
