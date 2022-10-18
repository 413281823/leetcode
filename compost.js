function compost(...fns) {
  return fns.reverse().reduce(function reducer(fn1, fn2) {
    return function composed(...args) {
      return fn2(fn1(...args))
    }
  })
}

// 计算x除以y的余数
const dividedBy = (y) => {
  return function forX(x) {
    return x % y
  }
}
// 判断余数是否等于1
const equalsTo = (y) => {
  return function forX(x) {
    return x === y
  }
}

const remainderOfTwo = dividedBy(2);
const equalsToOne = equalsTo(1);
// 函数组件思想
const isOdd = compost(remainderOfTwo, equalsToOne);