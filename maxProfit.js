// 121. 买卖股票最佳时机
//[7,1,5,3,6,4]
//5
// 第i天买入，第j天卖出 prices[j] - prices[i] 
const maxProfit = function (prices) {
    let max = 0
    const len = prices.length
    let minPrice = prices[0]
    for (let i = 1; i < len; i++) {
        // 每次替换保证买入的时候最小
        minPrice = Math.min(prices[i],minPrice)
        // 保证最大利润且保证最低为0
        max = Math.max(max,prices[i] - minPrice)
    }
    return max
}