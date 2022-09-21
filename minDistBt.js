//最短路径问题

// let minDist 
// 回溯列举所有可能
// function mindistBt(i , j, dist, w, n) {
//     if (i == n && j == n) {
//         if (dist < minDist) minDist = dist
//         return
//     }
//     if (i < n) {//往下走，更新 i= i + 1， j = j
//         mindistBt(i + 1, j, dist + w[i][j], w, n)
//     } 
//     if (j < n) {
//         mindistBt(i, j + 1, dist + w[i][j], w, n)
//     }
// }

// 动态规划

let matrix = [[1,3,5,9],[2,1,3,4],[5,2,6,7],[6,8,4,3]]
let n = matrix.length
let men =  Array.from(new Array(4), () => new Array(4).fill(0))
console.log(men)
function minDist(i,j) {
    // 如果都为0着直接放回第一项即可
    if (j == 0 && i==0) return matrix[0][0]
    // 如果相遇重复项直接返回值
    if (men[i][j] > 0) return men[i][j]
    let minLeft = Number.MAX_VALUE
    // 向右走一格如果还有递归
    if (j - 1 >= 0) {
        minLeft = minDist(i, j-1);
    }
    let minUp= Number.MAX_VALUE
    // 向下走一格如果还有递归
    if (i - 1 >= 0) {
        minUp = minDist(i - 1, j)
    }
    // 每次最优递推公式
    let currMinDist = matrix[i][j] + Math.min(minLeft,minUp)
    men[i][j] = currMinDist
    return currMinDist
}
console.log(minDist(n-1,n-1))