// 11. Container With Most Water

// Given n non - negative integers a1, a2, ..., an, where each represents a point at coordinate(i, ai).n vertical lines are drawn such that the two endpoints of the line i is at(i, ai) and(i, 0).Find two lines, which, together with the x - axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.
var maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = height.length - 1; j > i; j--) {
      max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
    }
  }
  return max;
};