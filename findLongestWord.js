const s = "abpcplea"
const dictionary = ["ale","apple","monkey","plea"]
// 1.dictionary的每一个字符串 和 s做对比 采用双指针
// 2.如果有和目前已存的字符串长度相同符合条件的字符串 则 对比字母序
const findLongestWord = function (s, dictionary) {
  let res = "";
  // 循环字符串数组的值
  for (const t of dictionary) {
    // i指向当前字符串 j指向目标字符串
    let i = 0,
      j = 0;
    while (i < t.length && j < s.length) {
        // 判断当前字符是否等于目标字符如果是则i，j同时右移，如果不是i不动则右移动 尝试下一个字符匹配t
      if (t[i] === s[j]) {
        i++;
      }
      j++;
    }
    if (i === t.length) {
            // 如果t的长度与res的长度相等则比较字母序
      if (t.length > res.length || (t.length === res.length && t < res)) {
        res = t;
      }
    }
  }

  return res;
};
console.log(findLongestWord(s,dictionary))