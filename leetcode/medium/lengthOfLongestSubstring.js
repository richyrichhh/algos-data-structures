// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function (s) {
  let count = 0;
  let currCount = 0;
  let seen = {};
  for (var i = 0; i < s.length; i++) {
    if (!seen[s[i]]) {
      seen[s[i]] = true;
      currCount++;
    } else {
      if (currCount >= count) count = currCount;
      currCount = 1;
      seen = {};
      seen[s[i]] = true;
    }
    if (currCount >= count) count = currCount;
  }

  return count;
};