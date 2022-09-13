// 最长公共子序列

const longestCommonSubsequence = function (text1, text2){
    let len1 = text1.length, len2 = text2.length,res = new Array(len2 + 1).fill(0)
    for (let i = 0; i < len1 ; i++) {
        let pre = 0
        for (let j = 0; j < len2; j++) {
            let temp = res[j + 1]
            if (text1[i] === text2[j]) {
                res[j + 1] = pre + 1
            } else {
                res[j + 1] = Math.max(res[j+1],res[j])
            }
            pre = temp
        }
    }
    return res[len2]
}
