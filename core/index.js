import Vue from "./Vue";
const vue = new Vue({
  data: {
    text: "😁",
    obj: {
      name: "哈哈",
    },
    arr: [["🐭", "🐂", "🐅"], 1, 2],
  },
});
let flag = true;
document.getElementById("text").innerHTML = vue.data.text;
document.getElementById("name").innerHTML = vue.data.obj.name;
document.getElementById("array").innerHTML = vue.data.arr;
document.getElementById("btn").onclick = function () {
  if (flag) {
    vue.data.text = "🐶";
    vue.data.obj.name = "狗";
    vue.data.arr[0].push(4);
  } else {
    vue.data.text = "🐈";
    vue.data.obj.name = "猫";
    vue.data.arr.push(5);
  }
  flag = !flag;
};
