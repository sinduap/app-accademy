# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(1)

Space complexity: O(1)

Justification: This method add the specified elements to the end of an array and returns the new length of the array.

[push on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

## `arr.pop()`

Time complexity: O(1)

Space complexity: O(1)

Justification: This method removes the last element from an array and returns that element.

[pop on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

## `arr.shift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: This method removes the first element from an array and returns that removed element.

[shift on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

## `arr.unshift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: This method adds the specified elements to the beginning of an array and returns the new length of the array.

[unshift on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

## `arr.splice()`

Time complexity: O(n)
Space complexity: O(1)
Justification: This method changes the contents of an array by removing or replacing existing elements and/or adding new elements.

[splice on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## `arr.slice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: This method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).

[slice on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(1)
Justification: This method returns the index of the first occurrence of the specified value in a string.

[indexOf on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## `arr.map()`

Time complexity: O(n)
Space complexity: O(n)
Justification: This method creates a new array with the results of calling a provided function on every element in the calling array

[map on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## `arr.filter()`

Time complexity: O(n)
Space complexity: O(n)
Justification: This method creates a new array with all elements that pass the test implemented by the provided function.

[filter on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(1)
Justification: This method applies a function against an accumulator and each element in the array to reduce it to a single value.

[reduce on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

## `arr.reverse()`

Time complexity: O(n).
Space complexity: O(1)
Justification: This method an array in place and returns the reference to the same array.

[reverse on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

## `[...arr]`

Time complexity: O(n)
Space complexity: O(n)
Justification: The spread (`...`) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

[spread on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
