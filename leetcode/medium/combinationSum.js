// 39. Combination Sum

// Given an array of distinct integers candidates and a target integer target, 
// return a list of all unique combinations of candidates where the chosen 
// numbers sum to target.You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times.
// Two combinations are unique if the frequency of at least one of the chosen 
// numbers is different.

// It is guaranteed that the number of unique combinations that sum up to 
// target is less than 150 combinations for the given input.

class Solution {
  constructor(nums) {
    this.freq = {};
    this.nums = nums;
    for (const n of nums) {
      this.freq[n] ? this.freq[n]++ : this.freq[n] = 1;
    }
  }

  compare(target) {
    for (const n in this.freq) {
      if (this.freq[n] !== target.freq[n]) return true;
    }
    return false;
  }
}

var combinationSum = function (candidates, target) {
  const res = [];

  const search = (start, nums) => {
    if (start === target) {
      let maybeSolution = new Solution(nums);
      if (res.every(sol => sol.compare(maybeSolution))) res.push(maybeSolution);
    }
    for (const num of candidates) {
      if (start + num <= target) {
        let newNums = [...nums]
        newNums.push(num)
        search(start + num, newNums)
      }
    }
  }

  search(0, []);
  return res.map(sol => sol.nums);
};