// 2. Add Two Numbers

// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order, and each of their nodes contains a single digit.Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function (l1, l2) {
  let curr1 = l1;
  let curr2 = l2;
  let res = new ListNode();
  let ans = res;
  let carry = 0;
  while (curr1 || curr2 || carry) {
    let num1 = 0;
    let num2 = 0;
    if (curr1) num1 = curr1.val;
    if (curr2) num2 = curr2.val;
    ans.val = num1 + num2;
    if (carry) {
      ans.val += carry;
      carry = 0;
    }
    if (ans.val > 9) {
      carry += 1;
      ans.val -= 10;
    }
    if (curr1 && curr1.next) curr1 = curr1.next;
    else curr1 = null;
    if (curr2 && curr2.next) curr2 = curr2.next;
    else curr2 = null;
    if (curr1 || curr2 || carry) {
      ans.next = new ListNode();
      ans = ans.next
    }
  }


  return res;

};