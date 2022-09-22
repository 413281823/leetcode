//对于一组不同重量、不同价值、不可分割的物品，我们选择将某些物品装入背包，在满足背包最大重量限制的前提下，背包中可装入物品的总价值最大是多少呢？

/**
 * @params maxV 结果
 * @params items 物品重量
 * @params value 物品总价值
 * @params len 物品个数
 * @params w 背包承受的最大重量
*/
// const w = 9
// const items = [2, 2, 4, 6, 3]
// const value = [3, 4, 8, 9, 6]
// const len = items.length
// let maxV=0
// 回溯算法
// function hnapsack2 (i, cw, cv) {
//     if (cw === w || i === len) {
//         if (cv > maxV) {
//             maxV = cv
//         }
//         return
//     }
//     hnapsack2(i + 1, cw, cv)
//     if (cw + items[i] <= w) {
//         hnapsack2(i + 1, cw + items[i], cv + value[i])
//     }
// }
// hnapsack2(0,0,0)
// console.log(maxV)

// 动态规划 二维数组
/**
 * @params weight 物品重量
 * @params value 物品总价值
 * @params len 物品个数
 * @params w 背包承受的最大重量
*/


function knapsack3(weight,value,len,w){
    let states = [new Array(w+1).fill(-1)]
    states[0][0] = 0
    if (weight[0] <= w) {
        states[0][weight[0]] = value[0];
    }
    for (let i = 1; i < len; i++) {
        states[i] = new Array(w+1).fill(-1)
        for (let j = 0; j<= w; j++) {
            if(states[i-1][j] >= 0){
                states[i][j] = states[i-1][j]
            }
        }
        for (let j = 0; j <= w-weight[i];j++) {
            if (states[i-1][j] >= 0) {
                let v = states[i-1][j] + value[i]
                if (v > states[i][j + weight[i]]) {
                    states[i][j+weight[i]] = v;
                }
            }
        }
    }
    let maxValue = -1
    for (let j = 0; j <= w; j++) {
        if (states[len-1][j] > maxValue){
            maxValue = states[len-1][j]
        }
    }
    return maxValue
}
// const w = 9
// const items = [2, 2, 4, 6, 3]
// const value = [3, 4, 8, 9, 6]
// const len = items.length
// let maxV=0
console.log(knapsack3([2, 2, 4, 6, 3],[3, 4, 8, 9, 6],5,9))