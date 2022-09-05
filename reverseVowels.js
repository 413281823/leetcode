const reverseVowels = (s) => {
    const n = s.length
    const arr = Array.from(s)

    let [left, right] = [0, s.length - 1]
    console.log(left, right)
    while (left < right) {
        // 
        while (left < n && !isEr(arr[left])) {
            left++
        }
        while (right > 0 && !isEr(arr[right])) {
            right--
        }
        if (left < right) {
            swap(arr, left, right) 
            left++
            right--
        }
        console.log(arr)
    }
    return arr.join('')
}

const isEr = (str) => {
    return "aeiouAEIOU".indexOf(str) >= 0
}

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}

console.log(reverseVowels('hello'))