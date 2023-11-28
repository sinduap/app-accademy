function allTheArgs(func, ...args1) {
  return (...args2) => func(...args1, ...args2);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
