// 自定义strategies对象,添加常用的验证规则
let strategies = {
  isNotEmpty: function(value, errMsg) {
    console.log(value);
    if (value === "") {
      return errMsg;
    }
  },
  maxLength: function(value, length, errMsg) {
    if (value.length > length) {
      return errMsg;
    }
  },
  // 有一个条件存在就可以,不能全为空
  hasOneCondition: function(valueList, errMsg) {
    let flag = valueList.every(ele => !!ele === false);
    if (flag) {
      return errMsg;
    }
  }
};
// Validator校验类
class Validator {
  constructor() {
    this.cache = [];
  }
  // 添加校验方法
  add(value, rules) {
    for (let i = 0, rule; (rule = rules[i++]); ) {
      let strategyAry = rule.strategies.split(":");
      let errMsg = rule.errMsg;
      this.cache.push(function() {
        let strategy = strategyAry.shift();
        strategyAry.unshift(value);
        strategyAry.push(errMsg);
        return strategies[strategy].apply(value, strategyAry);
      });
    }
  }
  // 启动校验规则
  start() {
    for (let i = 0, validateFunc; (validateFunc = this.cache[i++]); ) {
      let errMsg = validateFunc();
      if (errMsg) {
        return errMsg;
      }
    }
  }
}

// AOP动态添加校验逻辑
let before = function(beforeFn, fn) {
  let _this = this;
  return function() {
    if (beforeFn.apply(this, arguments) === false) {
      return;
    }
    return fn.apply(_this, arguments);
  };
};
export { Validator, before };
