// 模拟class原型继承

function Widget(widgetName) {
    this.widgetName = widgetName;
}

Widget.prototype.identify = function (node) {
    return "这是一个" + this.widgetName + "组件";
}

function Notice (widgetName) {
    Widget.call(this, widgetName);
}

Notice.prototype = Object.create(Widget.prototype);
Notice.prototype.display = function () {
    console.log(this.identify())
}

var notice = new Notice("通知");
var notice2 = new Notice("通知2");

Object.getPrototypeOf(notice) === Notice.prototype; // true
Object.getPrototypeOf(notice2) === Notice.prototype; // true

notice.display(); // 这是一个通知组件
notice2.display(); // 这是一个通知2组件
