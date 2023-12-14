const HashTable = require('./01-implementation');

function anagrams(str1, str2) {
  // Your code here
  if (str1.length !== str2.length) return false;

  const hashTable1 = new HashTable(str1.length);
  const hashTable2 = new HashTable(str2.length);

  for (let i = 0; i < str1.length; i++) {
    let currVal1 = hashTable1.read(str1[i]);

    if (!currVal1) {
      hashTable1.insert(str1[i], 1);
    } else {
      hashTable1.insert(str1[1], currVal1 + 1);
    }

    let currVal2 = hashTable2.read(str2[i]);

    if (!currVal2) {
      hashTable2.insert(str2[i], 1);
    } else {
      hashTable2.insert(str2[1], currVal2 + 1);
    }
  }

  return HashTable.compareHash(hashTable1, hashTable2);
}

function commonElements(arr1, arr2) {
  // Your code here
  return arr2.filter(el => arr1.includes(el));
}

function duplicate(arr) {
  // Your code here
  const arrSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (arrSet.has(arr[i])) return arr[i];
    arrSet.add(arr[i]);
  }
}

function twoSum(nums, target) {
  // Your code here
  const numsSet = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    let complement = target - currNum;

    if (complement !== currNum && numsSet.has(complement)) return true;
  }

  return false;
}

function wordPattern(pattern, strings) {
  // Your code here
  const memo = {};

  for (let i = 0; i < pattern.length; i++) {
    if (!memo[pattern[i]]) {
      for (key in memo) {
        if (memo[key] === strings[i]) {
          return false;
        }
      }

      memo[pattern[i]] = strings[i];
    } else if (memo[pattern[i]] !== strings[i]) {
      return false;
    }
  }

  return true;
}

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
