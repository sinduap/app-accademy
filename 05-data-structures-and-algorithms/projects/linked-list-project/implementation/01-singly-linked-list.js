// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Add node of val to head of linked list

    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(1)
    let newNode = new SinglyLinkedNode(val);
    this.length++;

    if (!this.head) {
      this.head = newNode;
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here

    // Add node of val to tail of linked list

    // Time complexity : O(n)
    let newNode = new SinglyLinkedNode(val);
    this.length++;

    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    return this;
  }

  removeFromHead() {
    // Remove node at head
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(1)
    if (this.length === 0) return;
    let removedHead = this.head;
    this.head = this.head.next;
    this.length--;
    return removedHead;
  }

  removeFromTail() {
    // Remove node at tail
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(n)
    if (this.length === 0) return;
    let count = 0;
    let curr = this.head;
    let newList = new this.constructor();
    let removedTail;

    while (curr) {
      if (count === this.length - 1) {
        removedTail = curr;
        break;
      }
      newList.addToTail(curr.value);
      curr = curr.next;
      count++;
    }

    this.length--;
    this.head = newList.head;
    return removedTail;
  }

  peekAtHead() {
    // Return value of head node
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(1)
    return this.head?.value;
  }

  print() {
    // Print out the linked list
    // Write your hypothesis on the time complexity of this method here

    // Time complexity : O(n)
    let curr = this.head;

    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
