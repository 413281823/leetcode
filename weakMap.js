// 利用weakMap创建私有属性
let WidgetH;

{
  let privateProps = new WeakMap();

  WidgetH = function () {
    privateProps.set(this, {
      appName: '天气应用'
    })
  }

  WidgetH.prototype.getName = function () {
    return privateProps.get(this).appName
  }
}

let widgetH = new WidgetH();
console.log(widgetH.getName());// 天气应用
console.log(widgetH.appName);// undefined