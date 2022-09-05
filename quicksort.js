// 快速排序
function quicksort(arr,left,right) {
    if (left > right) {
        return;
    }
    let l = left
    let r = right
    let temp = arr[left]
    while (l != r) {
        while(arr[r] >= temp && l<r) {
            r--
        }
        while(arr[l]<=temp && l<r) {
            l++
        }
        if (l<r) {
            let t = arr[l]
            arr[l] = arr[r]
            arr[r] = t
        }
    }
    arr[left] = arr[l]
    arr[l] = temp
    quicksort(arr,left,l - 1)
    quicksort(arr,l + 1,right)
}
const arr = [9,4,5,6,3,2,4,3]
quicksort(arr,0,arr.length-1)