# 学习 Vue2 原理的 demo

## 响应式原理

1. 对 data 创建 Observer 实例；
2. data 中的数据通过 Object.defineProperty 重写属性的 getter、setter（reactive 化）。（创建一个 Watch 实例，在构造函数中获取属性的值）在使用数据时会触发 getter 函数，将依赖（watch）收集到依赖类 Dep 的 sub 数组中；
3. 改变 data 中数据属性时会触发 setter 函数，通知收集的依赖更新，遍历 sub 中的 watch 对象，通知它们更新。

#### 处理数组

reactive 化时，判断到数据类型为数组

1. 为数据添加`__ob__`属性，值为该 Observer 实例；
2. 遍历数组中的每一项，为满足条件（不包含属性`__ob__`）的数组或对象创建 Observer 实例；
3. getter 方法中依赖收集时，如果数据类型为数组，将此依赖收集到 sub 中；
4. 重写该属性的"push"、"pop"、"shift"、"unshift"、"splice"、"sort"、"reverse"方法：先执行数组原来的方法，如果是 push、unshift、splice 方法，则对新添加参数进行响应式处理，最后通知依赖更新。
