// 1611. Minimum One Bit Operations to Make Integers Zero

// Given an integer n, you must transform it into 0 using the following 
// operations any number of times:

// Change the rightmost(0th) bit in the binary representation of n.
// Change the ith bit in the binary representation of n if the(i - 1)th bit 
//  is set to 1 and the(i - 2)th through 0th bits are set to 0.
// Return the minimum number of operations to transform n into 0.

var minimumOneBitOperations = function (n) {
  let res = 0;
  let operator = 1;
  let bits = 31;
  while (bits >= 0) {
    if (n & (1 << bits)) {
      let b = (1 << (bits + 1)) - 1;
      res += b * operator;
      operator *= -1;
    }
    bits--;
  }
  return res;
}