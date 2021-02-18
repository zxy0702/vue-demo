import Vue from "./Vue";
const vue = new Vue({
  data: {
    text: "😁",
  },
});
let flag = true;
document.getElementById("text").innerHTML = vue.data.text;
document.getElementById("btn").onclick = function () {
  if (flag) {
    vue.data.text = "🐶";
  } else {
    vue.data.text = "🐈";
  }
  flag = !flag;
};
