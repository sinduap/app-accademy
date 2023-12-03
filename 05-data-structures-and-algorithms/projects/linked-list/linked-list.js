class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    const newNode = new LinkedListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    // Your code here
    if (!this.head) {
      this.addToHead(val);
      return;
    }

    let current = this.head;
    while (current) {
      if (current.next === null) {
        current.next = new LinkedListNode(val);
        this.length++;
        break;
      }
      current = current.next;
    }
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    process.stdout.write('NULL');
  }
}

module.exports = LinkedList;
