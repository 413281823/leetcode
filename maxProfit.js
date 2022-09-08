// 121. 买卖股票最佳时机
// 第i天买入，第j天卖出 prices[j] - prices[i] 
const maxProfit = function (prices) {
    let max = 0
    const len = prices.length
    let minPrice = prices[0]
    for (let i = 1; i < len; i++) {
        minPrice = Math.min(prices[i],minPrice)
        max = Math.max(max,prices[i] - minPrice)
    }
    return max
}