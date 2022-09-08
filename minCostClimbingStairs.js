// 746使用最小花费爬楼梯
//dp[i] 代表到达阶梯i所需要最小体力花费值
// 类似🪣装法每次都递归的装下去，最后一个就是结果空间太大
// const minCostClimbingStairs = function (cost) {
//   const len = cost.length;
//   const dp = [0,0]
//   for (let i = 2; i<=len;i++) {
//     dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
//   }
//   return dp[len]
// };

const minCostClimbingStairs = function (cost){ 
    const len = cost.length;
   let prev = 0,current = 0,next

    for (let i = 2; i <= len; i++) {
        // current + cost[i - 1] 选择从1开始
        // prev + cost[i - 2] 选择从0开始
        next = Math.min(current + cost[i - 1], prev + cost[i - 2])
        // 其实这里就是回到一开始的地方0开始嘛
        prev = current
        // 这里就是1开始
        current = next
    }
    return next
}
minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])