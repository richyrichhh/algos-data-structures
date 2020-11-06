// 8. String to Integer(atoi)

// Implement atoi which converts a string to an integer.
// The function first discards as many whitespace characters as necessary until the first non - whitespace character is found.Then, starting from this character takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.
// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.
// If the first sequence of non - whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.
// If no valid conversion could be performed, a zero value is returned.

var myAtoi = function (str) {
  let parse = '';
  let i = 0;
  let match1 = ['+', '-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let match2 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  while (str[i] === ' ' && i < str.length) {
    i++;
  }
  if (!match1.includes(str[i])) return 0;
  let start = i;
  i++;

  while (match2.includes(str[i]) && i < str.length) {
    i++;
  }
  let end = i;
  if (start === end) return 0;
  let res = parseInt(str.slice(start, end));
  if (isNaN(res)) return 0;
  res < 0 ? res = Math.max(-2147483648, res) : res = Math.min(2147483647, res);
  return res;
};