// 最长公共子序列

const longestCommonSubsequence = function (text1, text2){
    let len1 = text1.length, len2 = text2.length,res = new Array(len2 + 1).fill(0)
    for (let i = 0; i < len1 ; i++) {
        // 累计值
        let pre = 0
        for (let j = 0; j < len2; j++) {
            //存一下
            let temp = res[j + 1]
            // 如果2个字母相等
            // res[j + 1] = 累计值 + 1
            if (text1[i] === text2[j]) {
                res[j + 1] = pre + 1
            } else {
                // 否则填充当前最大值
                res[j + 1] = Math.max(res[j+1],res[j])
            }
            pre = temp
        }
    }
    return res[len2]
}

// dp[i][j]是text1第i位，text2第j位的最长公共子序列长度
// 如果text1[i] === text2[j],dp[i][j]=dp[i-1][j-1]+1
// 否则，dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
// const longestCommonSubsequence = function (text1, text2) {
//   const len1 = text1.length;
//   const len2 = text2.length;
//   let dp = [new Array(len2 + 1).fill(0)];
//   for (let i = 1; i <= len1; i++) {
//     const c1 = text1[i - 1];
//     dp[i] = [0];
//     for (let j = 1; j <= len2; j++) {
//       const c2 = text2[j - 1];
//       if (c1 === c2) {
//         dp[i][j] = dp[i - 1][j - 1] + 1;
//       } else {
//         dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//       }
//     }
//   }
//   return dp[len1][len2];
// };
console.log(longestCommonSubsequence("abcde","ace"))
