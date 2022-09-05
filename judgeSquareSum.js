//633. 平方数之和
    const judgeSquareSum = function (c) {
    // 假设 a的平方 + b的平方 = c a=0 b = c的平方根
        let left = 0;
    let right = Math.floor(Math.sqrt(c));
    while(left <= right) {
        // 如果sum === c则条件达成
        const sum = left * left + right * right
        if (sum === c) {
            return true;
            // sum 大于c 则 右边减1 否则则左边加一
        } else if (sum > c) {
            right--
        } else {
            left++;
        }
    }
    return false
}