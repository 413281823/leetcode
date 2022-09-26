// 最长递增子序列 二分优化法
function lengthOfLIS(nums) {
  let n = nums.length;
  if (n <= 1){
    return n
  };

  let len = 1;
  let dp = [null, nums[0]];
  for (let i = 1; i < n; i++) {
    if (dp[len] < nums[i]) {
      dp[++len] = nums[i];
      continue;
    }
    // 否则去dp中二分查找，判读插入位置
    let left = 1,
      right = len,
      mid,
      pos = 0;
    while (left <= right) {
      mid = (left + right) >> 1;
      // 如果当前元素比dp的中间大 则left向右移动一位
      if (nums[i] > dp[mid]) {
        // 元素在右边
        left = mid + 1;
        pos = mid;
      } else {
        right = mid - 1;
      }
    }
    dp[pos + 1] = nums[i];
  }

  return len;
}
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))

