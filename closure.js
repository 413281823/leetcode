// function foo() {
//   var a = 2;
//   function baz() {
//     console.log(a); //2
//   }
//   bar(baz);
// }

// function bar(fn) {
//   fn(); // 这是闭包
// }
// foo();
// 把内部函数baz传递给bar， 当调用这个内部函数时（现在叫作fn），它涵盖的foo()内部
// 作用域的闭包就可以观察到了， 因为它能够访问a。

// 现代模块极机制
var MyModules = (function Manager() {
  var modules = {};
  function define(name, deps, impl) {
    for (var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply(impl, deps);
  }
  function get(name) {
    return modules[name];
  }
  return {
    define,
    get,
  };
})();
// 这段模块代码定义了引入包装函数，并且将返回值，也就是模块的API，存储在一个根据名字来管理的模块列表中

MyModules.define('bar',[],function (){
    function hello(who) {
        return "Let me introduce:" + who
    }
    return {
        hello
    }
})

MyModules.define('foo',['bar'],function(bar){
    var hungry = 'hippo'
    function awesome(){
        console.log(bar.hello(hungry).toUpperCase());
    }
    return {
        awesome
    }
})

const b = MyModules.get('bar')
const f = MyModules.get('foo')
console.log(b.hello('hello'));
f.awesome()

