import Watch from "./watcher";
import Dep from "./dep";
export default class Vue {
  constructor(obj) {
    this.data = obj.data;
    const observer = new Observer(this.data);
    new Watch(this, "data.text", function (val) {
      document.getElementById("text").innerHTML = val;
    });
  }
}

class Observer {
  constructor(value) {
    if (isObject(value)) {
      this.walk(value);
    }
  }
  walk(object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(object, keys[i], object[keys[i]]);
    }
  }
}

function defineReactive(obj, key, value) {
  const dep = new Dep();
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      dep.depend();
      return value;
    },
    set(newVal) {
      if (value !== newVal) {
        value = newVal;
        dep.notify();
      }
    },
  });
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
