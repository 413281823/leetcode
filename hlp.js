const longestPalindrome = function(s) {
  if (s.length < 2) {
    return s
  }
  let l = 0;
  let r = 0;
  for (let i = 0; i < s.length; i++) {
    helper(i, i)
    helper(i, i + 1)
  }
  // "babad"
  function helper(m, n) {
    while (m >= 0 && n < s.length && s[m] === s[n]) {
      m--;
      n++;
    }
    if (n - m > r - l) {
      r = n;
      l = m;
    }
  }
  return s.slice(l + 1, r)
}

console.log(lonkjjkjjjindrome("baab"))
