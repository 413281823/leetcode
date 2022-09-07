// 两数之和
// const twoSum = (nums, target) => {
//   const hash = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     // 判断是否存在目标值减去当前值的差的key 因为 target - x = y
//     if (hash.has(target - nums[i])) {
//       return [i, hash.get(target - nums[i])];
//     }
//     // 把当前数组的值做key，下标做值
//     hash.set(nums[i], i);
//   }
// };

const towSum = (nums, target) => {
  const hash = {}
  for (let i = 0;i < nums.length; i++) {
    if (hash[target-nums[i]]){
      return [i, hash.get(target - nums[i])]
    }
    hash[target-nums[i]] = i
  }
}