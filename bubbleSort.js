// 优化冒泡排序

function bubbleSort (arr) {
    if (arr.length <= 1) {
        return 
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i-1;j++) {
            if (arr[j] > arr[j+1]) {
                let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }
    }
    return arr
}

console.log(bubbleSort([3,2,4,5,6,3,3,2,234,5,6,23]))