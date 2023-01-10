// const isType = function (type) {
//   return function (obj) {
//     return Object.prototype.toString.call(obj) === `[object ${type}]`
//   }
// }

// const isString = isType('String')
// const isArray = isType('Array')
// const isNumber = isType('Number')


// // 高阶组件

// const cost = (function () {
//   const args = []
//   return function () {
//     if (arguments.length === 0) {
//       let money = 0
//       for (let i = 0; i < args.length; i++) {
//         money += args[i]
//       }
//       return money
//     } else {
//       [].push.apply(args, arguments)
//     }
//   }
// })();

// cost(100); // 未真正求值
// cost(200); // 未真正求值
// cost(300); // 未真正求值
// console.log(cost()); // 求值并输出：600

const currying = function (fn) {
  const args = []
  return function () {
    if (arguments.length === 0) {
      return fn.apply(this, args)
    } else {
      [].push.apply(args, arguments)
      return arguments.callee
    }
  }
}

let cost = (function () {
  let money = 0
  return function () {
    for (let i = 0; i < arguments.length; i++) {
      money += arguments[i]
    }
    return money
  }
})()

cost = currying(cost)
cost(100)
cost(200)

console.log(cost());

// Function.prototype.uncurrying = function () {
//   const self = this
//   return function () {
//     const obj = Array.prototype.shift.call(arguments)
//     return self.apply(obj, arguments);
//   }
// }
// 另外一种实现方式
Function.prototype.uncurrying = function () {
  const self = this
  return function () {
    return Function.prototype.call.apply(self, arguments)
  }
}
const push = Array.prototype.push.uncurrying()
const obj = {
  length: 1,
  0: 1
}
push(obj, 2)
console.log(obj)