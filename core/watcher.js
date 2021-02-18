let id = 0;
export default class Watch {
  constructor(vm, expOrFn, cb) {
    this.vm = vm;
    // this.expOrFn = expOrFn;
    this.cb = cb;
    this.id = ++id;
    this.getter = parsePath(expOrFn);
    this.value = this.get();
  }
  get() {
    window.target = this;
    let value = this.getter.call(this.vm, this.vm);
    window.target = null;
    return value;
  }
  update() {
    const oldValue = this.value;
    this.value = this.get();
    this.cb.call(this, this.value, oldValue);
  }
}

function parsePath(path) {
  let arr = path.split(".");
  return function (obj) {
    for (let i = 0; i < arr.length; i++) {
      if (!obj) return;
      obj = obj[arr[i]];
    }
    return obj;
  };
}
