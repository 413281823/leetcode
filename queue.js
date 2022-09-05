let arr = [6,3,1,7,5,8,9,2,4]
const queue = (arr) => {
    const qq = [];
    let head = 0,tail = arr.length
    while(head < tail) {
        qq.push(arr[head])
        head++
        arr[tail] = arr[head]
        tail++
        head++
    }
    return qq
}
console.log(queue(arr))