const strategies = {
  isNonEmpty(value, errorMsg) { // 校验非空
    if (value === '') {
      return errorMsg;
    }
  },
  minLength(value, length, errorMsg) { // 校验最小长度
    if (value.length < length) {
      return errorMsg;
    }
  },
  isMobile(value, errorMsg) { // 校验手机号
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg;
    }
  }
}

const Validator = function () {
  this.cache = []
}

Validator.prototype.add = function (dom, rules) {
  let self = this
  for (let i = 0; rule; rule = rules[i++]) {
    (function (rule) { // 将rule的信息保存到闭包中
      const strategyAry = rule.strategy.split(':') // 把strategy和参数分开
      const errorMsg = rule.errorMsg // 把errorMsg保存到变量中
      self.cache.push(function () {// 把校验的步骤用空函数包装起来，并且放入cache
        const strategy = strategyAry.shift() // 用户挑选的strategy
        strategyAry.unshift(dom.value) // 把input的value添加进参数列表
        strategyAry.push(errorMsg)// 把errorMsg添加进参数列表
        return strategies[strategy].apply(dom, strategyAry)
      })
    })(rule)
  }
}
Validator.prototype.start = function () {
  for (let i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
    const msg = validatorFunc(); // 开始校验，并取得校验后的返回信息
    if (msg) {
      return msg;
    }
  }
}
const registerForm = document.getElementById('registerForm');
const validataFunc = function () {
  const validator = new Validator();
  validator.add(registerForm.userName, [{
    strategy: 'isNonEmpty',
    errorMsg: '用户名不能为空'
  }, {
    strategy: 'minLength:6',
    errorMsg: '用户名长度不能小于 10 位'
  }]);
  validator.add(registerForm.password, [{
    strategy: 'minLength:6',
    errorMsg: '密码长度不能小于 6 位'
  }]);
  validator.add(registerForm.phoneNumber, [{
    strategy: 'isMobile',
    errorMsg: '手机号码格式不正确'
  }]);
  var errorMsg = validator.start();
  return errorMsg;
}

registerForm.onsubmit = function () {
  const errorMsg = validataFunc();
  if (errorMsg) {
    alert(errorMsg);
    return false;
  }
}