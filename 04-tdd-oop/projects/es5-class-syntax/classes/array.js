Array.prototype.isEqual = function (arr) {
  return (
    arr.length === this.length &&
    this.reduce((acc, curr, i) => (acc ? curr === arr[i] : acc), true)
  );
};
