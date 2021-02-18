export default class dep {
  constructor() {
    this.subs = [];
  }
  addSub(sub) {
    this.subs.push(sub);
  }
  removeSub(sub) {
    if (this.subs.length) {
      const index = this.subs.indexOf(sub);
      if (index > -1) {
        this.subs.splice(index, 1);
      }
    }
  }
  depend() {
    if (window.target) {
      if (this.subs.indexOf(window.target) === -1) {
        this.addSub(window.target);
      }
    }
  }
  notify() {
    console.log(this.subs);
    for (let i = 0, len = this.subs.length; i < len; i++) {
      this.subs[i].update();
    }
  }
}
