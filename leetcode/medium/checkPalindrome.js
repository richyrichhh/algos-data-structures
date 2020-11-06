// 5. Longest Palindromic Substring

// Given a string s, return the longest palindromic substring in s.

var checkPalindrome = function (s) {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
}

var longestPalindrome = function (s) {
    if (s.length === 1) return s;
    if (checkPalindrome(s)) return s;
    let longest = '';
    let len = 0;
    let i = 0;
    while (i < s.length - 1) {
        let j = s.length;
        while (j > i) {
            let sub = s.slice(i, j);
            if (checkPalindrome(sub) && (j - i) > len) {
                longest = sub;
                len = j - i;
            }
            j--;
        }
        i++;
    }
    return longest;
};