import { def } from "../util/index";
const arrayProto = Array.prototype;

export const arrayMethods = Object.create(arrayProto);

const methods = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
];
methods.forEach((method) => {
  const originMethods = arrayProto[method];
  def(arrayMethods, method, function (...args) {
    const ob = this.__ob__;
    const result = originMethods.apply(this, args);
    let inserted;
    switch (method) {
      case "push":
      case "unshift":
        inserted = args;
        break;
      case "splice":
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observerArray(args);
    ob.dep.notify();
    return result;
  });
});
