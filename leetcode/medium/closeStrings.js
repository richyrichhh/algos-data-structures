// 1657. Determine if Two Strings Are Close

// Two strings are considered close if you can attain one from the other using 
// the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb

// Operation 2: Transform every occurrence of one existing character into 
//  another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa
// (all a's turn into b's, and all b's turn into a's)

// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are 
// close, and false otherwise.


var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  const freq1 = {};
  const freq2 = {};
  for (const letter of word1) {
    freq1[letter] ? freq1[letter]++ : freq1[letter] = 1;
  }
  for (const letter of word2) {
    freq2[letter] ? freq2[letter]++ : freq2[letter] = 1;
  }
  let letters1 = new Set(Object.keys(freq1));
  let letters2 = new Set(Object.keys(freq2));
  for (const letter of letters1) {
    if (!letters2.has(letter)) return false;
  }
  let vals1 = Object.values(freq1).sort((a, b) => a - b);
  let vals2 = Object.values(freq2).sort((a, b) => a - b);
  return (vals1.every((val, i) => {
    return val === vals2[i]
  }))
};