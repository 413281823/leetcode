// 746使用最小花费爬楼梯
//dp[i] 代表到达阶梯i所需要最小体力花费值
// 类似🪣装法每次都递归的装下去，最后一个就是结果空间太大
const minCostClimbingStairs = function (cost) {
  const len = cost.length;
  const dp = [0,0]
  for (let i = 2; i<=len;i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[len]
};
