// 6. ZigZag Conversion

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

//   P   A   H   N
//   A P L S I I G
//   Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

var convert = function (s, numRows) {
  if (s.length === 1 || numRows === 1) return s;
  let down = numRows - 1;
  let firstDown = down * 2;
  let row = 0;
  let res = [];
  while (row < (numRows / 2)) {
    let c = 0;
    let curr = 2 * down;
    res.push('');
    let i = row;
    while (i < s.length) {
      if (curr !== firstDown) {
        if (c) {
          curr = firstDown - (2 * down)
          c = 0;
        } else {
          curr = 2 * down;
          c = 1;
        }
      }
      res[row] += s[i];
      i += curr;
    }
    down--;
    row++;
  }
  if (numRows % 2 === 0) {
    down += 1;
    console.log(down);
  }
  else down += 2;
  while (row < numRows) {
    let c = 1;
    let curr = 2 * down;
    res.push('');
    let i = row;
    while (i < s.length) {
      if (curr !== firstDown) {
        if (c) {
          curr = firstDown - (2 * down)
          c = 0;
        } else {
          curr = 2 * down;
          c = 1;
        }
      }
      console.log(curr);
      res[row] += s[i];
      i += curr;
    }
    down++;
    row++;
  }
  console.log(res);
  return res.reduce((a, b) => a + b);
};