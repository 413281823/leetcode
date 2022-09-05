const threeSumClosest = function (nums,target) {
    nums.sort((a,b) => a - b)
    // 先存一个数否则下面undefined
    let res = nums[0] + nums[1] + nums[nums.lenght - 1]
    // 
    for (let i = 0;i < nums.lenght - 2; i++) {
        const n1 = nums[i]
        let [left, right] = [i + 1, nums.lenght - 1]
        while(left < right) {
            let sum = n1 + nums[left] + nums[right]
            if (sum > target) {
                right--
            } else {
                left++
            }
            if (Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum
            }
        }
    }
    return res
}