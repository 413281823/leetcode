// “多态”一词源于希腊文 polymorphism，拆开来看是 poly（复数）+ morph（形态）+ ism，
// 从字面上我们可以理解为复数形态。
// 多态的实际含义是：同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结
// 果。换句话说，给不同的对象发送同一个消息的时候，这些对象会根据这个消息分别给出不同的
// 反馈。

// const makeSound = function (animal) {
//   if (animal instanceof Duck) {
//     console.log('gagaga');
//   } else if (animal instanceof Chicken) {
//     console.log('gegege');
//   }
// }

// const Duck = function () { };
// const Chicken = function () { };
// makeSound(new Duck()); // gagaga
// makeSound(new Chicken()); // gegege

const makeSound = function (animal) {
  animal.sound()
}

const Duck = function () { }
Duck.prototype.sound = function () {
  console.log('gagaga');
}

const Chicken = function () { }
Chicken.prototype.sound = function () {
  console.log('gegege');
}
const Dog = function () { }
Dog.prototype.sound = function () {
  console.log('wawawa');
}

makeSound(new Duck()); // gagaga
makeSound(new Chicken()); // gegege
makeSound(new Dog()); // wawawa