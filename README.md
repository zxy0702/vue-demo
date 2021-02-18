# 学习 Vue2 原理的 demo

## 响应式原理

通过 Object.defineProperty 拦截数据的 get、set 方法，获取数据时收集依赖，更新数据时通知变化
