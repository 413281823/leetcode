// 原型模式 不用关心对象的具体类型，找到一个对象，然后通过克隆来创建一个一模一样的对象

// 1. 原型模式的实现
const Plane = function () {
  this.blood = 100
  this.attackLevel = 1
  this.defenseLevel = 1
}

const plane = new Plane()
plane.blood = 500
plane.attackLevel = 10
plane.defenseLevel = 7

const clonePlane = Object.create(plane)
console.log(clonePlane.blood) // 500

// 在不支持Object.create的浏览器中，可以使用如下代码来实现

Object.create = Object.create || function (obj) {
  let F = function () { }
  F.prototype = obj
  return new F()
}
// 原型编程范式的基本规则
// 1.所有数据都是对象
// 不能说在 JavaScript 中所有的数据都是对象，但可以说绝大部分数据都是对象。那么相
// 信在 JavaScript 中也一定会有一个根对象存在，这些对象追根溯源都来源于这个根对象。
// 2.要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它
// 3.一个对象说要改变状态，只需要修改自身状态
// 4.对象会记住它的原型
// 5.如果对象无法响应某个请求，它会把这个请求委托给它的原型

// new 的实现
const objectFactory = function () {
  const obj = new Object()// 从 Object.prototype 上克隆一个空的对象
  Constructor = [].shift.call(arguments) // 取得外部传入的构造器
  obj.__proto__ = Constructor.prototype // 修改正确的原型指向
  const ret = Constructor.apply(obj, arguments) // 绑定 this 实现继承，obj 可以访问到构造器中的属性
  return typeof ret === 'object' ? ret : obj // 确保构造器总是返回一个对象
}
const a = objectFactory(Person, 'sven');
