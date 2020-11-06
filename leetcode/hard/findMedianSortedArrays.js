// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// Follow up: The overall run time complexity should be O(log(m + n)).

var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.every(n => n === 0) && nums2.every(n => n === 0)) return 0;

  let counter = (nums1.length + nums2.length) / 2;
  let between;
  if (counter % 1 === 0) {
    between = true;
  } else {
    counter = Math.floor(counter);
    between = false;
  }

  if (between) counter -= 1;

  while (counter > 0) {
    if (!nums1[0] || nums1[0] > nums2[0]) {
      nums2.shift();
    } else {
      nums1.shift();
    }
    counter--;
  }

  // console.log(nums1);
  // console.log(nums2);

  if (between) {
    let first = 0;
    let second = 0;

    if (!nums1[0] || nums1[0] > nums2[0]) {
      first = nums2.shift();
    } else {
      first = nums1.shift();
    }

    if (!nums1[0] || nums1[0] > nums2[0]) {
      second = nums2.shift();
    } else {
      second = nums1.shift();
    }

    return (first + second) / 2;
  } else {
    if (nums1[0] > nums2[0] || !nums1[0]) return nums2[0];
    else return nums1[0];
  }
};