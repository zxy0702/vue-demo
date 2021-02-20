import Watch from "./watcher";
import Dep from "./dep";
import { arrayMethods } from "./array";
import { def } from "../util/index";

const arrayKeys = Object.getOwnPropertyNames(arrayMethods);
export default class Vue {
  constructor(obj) {
    this.data = obj.data;
    const observer = new Observer(this.data);
    new Watch(this, "data.text", function (val) {
      document.getElementById("text").innerHTML = val;
    });
    new Watch(this, "data.obj.name", function (val) {
      document.getElementById("name").innerHTML = val;
    });
    new Watch(this, "data.arr", function (val) {
      console.log("收到了了了", val);
      document.getElementById("array").innerHTML = val;
    });
  }
}

class Observer {
  constructor(value) {
    console.log("new Observer", value);
    this.dep = new Dep();
    console.log("创建dep id", this.dep.id);
    this.value = value;
    if (Array.isArray(value)) {
      def(value, "__ob__", this);
      protoAugment(value, arrayMethods);
      // copyAugment(object, arrayMethods, arrayKeys);
      this.observerArray(value);
    } else if (isObject(value)) {
      this.walk(value);
    }
  }
  walk(object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(object, keys[i], object[keys[i]]);
    }
  }
  observerArray(array) {
    for (let i = 0, len = array.length; i < len; i++) {
      observe(array[i]);
    }
  }
}

function defineReactive(obj, key, value) {
  const dep = new Dep();
  let childObj = observe(value);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      if (window.target) {
        dep.depend();

        if (childObj) {
          childObj.dep.depend();
        }
        console.log("childObj", childObj && childObj.dep.id);
        if (Array.isArray(value)) {
          value && value.__ob__ && value.__ob__.dep.depend();
          // dependArray(value);
        }
      }

      return value;
    },
    set(newVal) {
      if (value !== newVal) {
        value = newVal;
        childObj = observe(newVal);
        dep.notify();
      }
    },
  });
}

function isObject(obj) {
  return obj != null && typeof obj === "object";
}
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

function protoAugment(object, src) {
  object.__proto__ = src;
}

function copyAugment(object, src, keys) {
  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i];
    def(object, key, src[key]);
  }
}

function observe(value) {
  if (!isObject(value)) {
    return;
  }
  let ob;
  if (value.hasOwnProperty("__ob__") && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (Array.isArray(value) || isPlainObject(value)) {
    ob = new Observer(value);
  }
  return ob;
}

function dependArray(value) {
  value && value.__ob__ && value.__ob__.dep.depend();
  for (let e, i = 0, len = value.length; i < len; i++) {
    e = value[i];
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}
