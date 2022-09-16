// 背包问题 
/**
 * @params items 物品重量集合
 * @params n 物品个数
 * @params w 背包承受的最大重量
 * */

function knapsack (items, n, w) {
    const states = new Array(w + 1).fill(false)
    states[0] = true
    if (items[0] <= w) {
        states[items[0]] = true
    }
    for (let i = 1; i < n; i++) {
        for (let j = w - items[i]; j >= 0; j--) {
            if (states[j]) states[j + items[i]] = true
        }
    }
    for (let i = w; i >= 0; i--) {
        if (states[i]) return i
    }
    return 0
}
console.log(knapsack([2, 2, 4, 6, 3], 5, 9))