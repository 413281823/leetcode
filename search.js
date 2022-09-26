//744 二分查找

function search (nums, target){
    let [left,right] = [0,nums.length]
    while(left <= right) {
        let mid = (left + right) >> 1
        if (nums[mid] === target) return mid
        // 大于左移动 小于右移动
        if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}