const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
const ITERATIONS = 10_000; // ten thousand
let start, end;

const ll = new LinkedList();
const dll = new DoublyLinkedList();

// Linked List addToHead x iterations
start = Date.now();
for (let i = 0; i < ITERATIONS; i++) {
  ll.addToHead(i);
}
end = Date.now();
console.log(`Linked List - addToHead x ${ITERATIONS}: ${end - start}ms`);

// Linked List addToTails x iterations
start = Date.now();
for (let i = 0; i < ITERATIONS; i++) {
  ll.addToTail(i);
}
end = Date.now();
console.log(`Linked List - addToTail x ${ITERATIONS}: ${end - start}ms`);

// Doubly Linked List addToHead x iterations
start = Date.now();
for (let i = 0; i < ITERATIONS; i++) {
  dll.addToHead(i);
}
end = Date.now();
console.log(`Doubly Linked List - addToHead x ${ITERATIONS}: ${end - start}ms`);

// Doubly Linked List addToTail x iterations
start = Date.now();
for (let i = 0; i < ITERATIONS; i++) {
  dll.addToTail(i);
}
end = Date.now();
console.log(`Doubly Linked List - addToTail x ${ITERATIONS}: ${end - start}ms`);
