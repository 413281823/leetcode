/**
 * @param {number[]} stones
 * @return {number}
 */
function quicksort(arr, left, right) {
  if (left > right) {
    return;
  }
  let l = left;
  let r = right;
  let temp = arr[left];
  while (l != r) {
    while (arr[r] <= temp && l < r) {
      r--;
    }
    while (arr[l] >= temp && l < r) {
      l++;
    }
    if (l < r) {
      let t = arr[l];
      arr[l] = arr[r];
      arr[r] = t;
    }
  }
  arr[left] = arr[l];
  arr[l] = temp;
  quicksort(arr, left, l - 1);
  quicksort(arr, l + 1, right);
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
// var lastStoneWeight = function(stones) {
//    if (stones.length <= 1) {
//     return stones
//    }
//    quicksort(stones, 0, stones.length-1)
//     const y = stones.pop()
//     const x = stones.pop()
//     let res

// };

// console.log(lastStoneWeight([2,7,4,1,8,1]))
