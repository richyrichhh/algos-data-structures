// Letter Case Permutation

// Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.
// Return a list of all possible strings we could create. You can return the output in any order.

var letterCasePermutation = function (S) {
  var res = [];

  function dfs(current, i) {
    if (current.length == S.length) {
      res.push(current);
    }
    else if (S[i] >= '0' && S[i] <= '9') {
      current += S[i];
      dfs(current, i + 1);
    }
    else {
      dfs(current + S[i].toLowerCase(), i + 1)
      dfs(current + S[i].toUpperCase(), i + 1)
    }
  }

  dfs("", 0);

  return res;
};