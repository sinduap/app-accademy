// Implement the imported helper functions from line 1
//    Read the export file for the explanation of how they work

// Example workflow for the problem directly below:
//    A    B     !A || (A && B)
//    -------------------
//    0    1      ?

//    1. !A -> 1
//    2. calculateTruthTable(0, and, 1) -> 0
//    3. calculateTruthTable(1, or, 0) -> 1
//    4. Answer: 1

/******************************************************************************/
const and = (a, b) => a && b;
const or = (a, b) => a || b;
const not = a => (a === 0 ? 1 : 0);

const calculateTruthTable = (a, cb, b) => cb(a, b);

// Update arguments to calculate and console.log returned value
// calculateTruthTable(0, and, 1); // 0
// calculateTruthTable(1, or, 0); // 1
const table1 = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];

const table2 = [
  [0, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
  [0, 1, 1],
  [1, 0, 0],
  [1, 0, 1],
  [1, 1, 0],
  [1, 1, 1],
];

function logTable(table, cb) {
  console.log('#### Table ####');
  table.forEach(row => console.log(cb(row)));
}

logTable(table1, ([A, B]) =>
  calculateTruthTable(not(A), or, calculateTruthTable(A, and, B))
);
logTable(table1, ([A, B]) => calculateTruthTable(B, or, not(A)));
logTable(table1, ([A, B]) => not(calculateTruthTable(A, and, not(B))));
logTable(table1, ([A, B]) => not(calculateTruthTable(A, or, not(B))));
logTable(table1, ([A, _B]) => calculateTruthTable(A, or, not(A)));
logTable(table1, ([_A, B]) => calculateTruthTable(B, and, not(B)));
logTable(table2, ([A, B, C]) =>
  calculateTruthTable(calculateTruthTable(A, and, B), or, not(C))
);
logTable(table2, ([A, B, C]) =>
  calculateTruthTable(not(A), or, calculateTruthTable(B, and, C))
);
