// Deepest Leaves Sum

// Given a binary tree, return the sum of values of its deepest leaves.

var deepestLeavesSum = function (root) {
  // console.log(helper(root, 0));
  return helper(root, 0)[0];
};

let helper = (root, level) => {
  if (root.left && root.right) {
    let left = helper(root.left, level + 1);
    let right = helper(root.right, level + 1);
    if (left[1] === right[1]) return [left[0] + right[0], left[1]];
    else if (left[1] > right[1]) return left;
    else if (left[1] < right[1]) return right;
  } else if (root.left) return helper(root.left, level + 1);
  else if (root.right) return helper(root.right, level + 1);
  else {
    // console.log([root.val, level]);
    return [root.val, level];
  }
}