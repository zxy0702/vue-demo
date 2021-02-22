/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./core/Vue.js":
/*!*********************!*\
  !*** ./core/Vue.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Vue)\n/* harmony export */ });\n/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watcher */ \"./core/watcher.js\");\n/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dep */ \"./core/dep.js\");\n/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array */ \"./core/array.js\");\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/index */ \"./util/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\nvar arrayKeys = Object.getOwnPropertyNames(_array__WEBPACK_IMPORTED_MODULE_2__.arrayMethods);\n\nvar Vue = function Vue(obj) {\n  _classCallCheck(this, Vue);\n\n  this.data = obj.data;\n  var observer = new Observer(this.data);\n  new _watcher__WEBPACK_IMPORTED_MODULE_0__.default(this, \"data.text\", function (val) {\n    document.getElementById(\"text\").innerHTML = val;\n  });\n  new _watcher__WEBPACK_IMPORTED_MODULE_0__.default(this, \"data.obj.name\", function (val) {\n    document.getElementById(\"name\").innerHTML = val;\n  });\n  new _watcher__WEBPACK_IMPORTED_MODULE_0__.default(this, \"data.arr\", function (val) {\n    document.getElementById(\"array\").innerHTML = val;\n  });\n};\n\n\n\nvar Observer = /*#__PURE__*/function () {\n  function Observer(value) {\n    _classCallCheck(this, Observer);\n\n    this.dep = new _dep__WEBPACK_IMPORTED_MODULE_1__.default();\n    this.value = value;\n\n    if (Array.isArray(value)) {\n      (0,_util_index__WEBPACK_IMPORTED_MODULE_3__.def)(value, \"__ob__\", this);\n      protoAugment(value, _array__WEBPACK_IMPORTED_MODULE_2__.arrayMethods); // copyAugment(object, arrayMethods, arrayKeys);\n\n      this.observerArray(value);\n    } else if (isObject(value)) {\n      this.walk(value);\n    }\n  }\n\n  _createClass(Observer, [{\n    key: \"walk\",\n    value: function walk(object) {\n      var keys = Object.keys(object);\n\n      for (var i = 0; i < keys.length; i++) {\n        defineReactive(object, keys[i], object[keys[i]]);\n      }\n    }\n  }, {\n    key: \"observerArray\",\n    value: function observerArray(array) {\n      for (var i = 0, len = array.length; i < len; i++) {\n        observe(array[i]);\n      }\n    }\n  }]);\n\n  return Observer;\n}();\n\nfunction defineReactive(obj, key, value) {\n  var dep = new _dep__WEBPACK_IMPORTED_MODULE_1__.default();\n  var childObj = observe(value);\n  Object.defineProperty(obj, key, {\n    enumerable: true,\n    configurable: true,\n    get: function get() {\n      if (window.target) {\n        dep.depend();\n\n        if (childObj) {\n          childObj.dep.depend();\n        }\n\n        if (Array.isArray(value)) {\n          dependArray(value);\n        }\n      }\n\n      return value;\n    },\n    set: function set(newVal) {\n      if (value !== newVal) {\n        value = newVal;\n        childObj = observe(newVal);\n        dep.notify();\n      }\n    }\n  });\n}\n\nfunction isObject(obj) {\n  return obj != null && _typeof(obj) === \"object\";\n}\n\nfunction isPlainObject(obj) {\n  return Object.prototype.toString.call(obj) === \"[object Object]\";\n}\n\nfunction protoAugment(object, src) {\n  object.__proto__ = src;\n}\n\nfunction copyAugment(object, src, keys) {\n  for (var i = 0, len = keys.length; i < len; i++) {\n    var key = keys[i];\n    (0,_util_index__WEBPACK_IMPORTED_MODULE_3__.def)(object, key, src[key]);\n  }\n}\n\nfunction observe(value) {\n  if (!isObject(value)) {\n    return;\n  }\n\n  var ob;\n\n  if (value.hasOwnProperty(\"__ob__\") && value.__ob__ instanceof Observer) {\n    ob = value.__ob__;\n  } else if (Array.isArray(value) || isPlainObject(value)) {\n    ob = new Observer(value);\n  }\n\n  return ob;\n}\n\nfunction dependArray(value) {\n  value && value.__ob__ && value.__ob__.dep.depend();\n\n  for (var e, i = 0, len = value.length; i < len; i++) {\n    e = value[i];\n\n    if (Array.isArray(e)) {\n      dependArray(e);\n    }\n  }\n}\n\n//# sourceURL=webpack://vue-demo/./core/Vue.js?");

/***/ }),

/***/ "./core/array.js":
/*!***********************!*\
  !*** ./core/array.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arrayMethods\": () => (/* binding */ arrayMethods)\n/* harmony export */ });\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/index */ \"./util/index.js\");\n\nvar arrayProto = Array.prototype;\nvar arrayMethods = Object.create(arrayProto);\nvar methods = [\"push\", \"pop\", \"shift\", \"unshift\", \"splice\", \"sort\", \"reverse\"];\nmethods.forEach(function (method) {\n  var originMethods = arrayProto[method];\n  (0,_util_index__WEBPACK_IMPORTED_MODULE_0__.def)(arrayMethods, method, function () {\n    var ob = this.__ob__;\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    var result = originMethods.apply(this, args);\n    var inserted;\n\n    switch (method) {\n      case \"push\":\n      case \"unshift\":\n        inserted = args;\n        break;\n\n      case \"splice\":\n        inserted = args.slice(2);\n        break;\n    }\n\n    if (inserted) ob.observerArray(args);\n    ob.dep.notify();\n    return result;\n  });\n});\n\n//# sourceURL=webpack://vue-demo/./core/array.js?");

/***/ }),

/***/ "./core/dep.js":
/*!*********************!*\
  !*** ./core/dep.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dep)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar id = 0;\n\nvar dep = /*#__PURE__*/function () {\n  function dep() {\n    _classCallCheck(this, dep);\n\n    this.subs = [];\n    this.id = ++id;\n  }\n\n  _createClass(dep, [{\n    key: \"addSub\",\n    value: function addSub(sub) {\n      this.subs.push(sub);\n    }\n  }, {\n    key: \"removeSub\",\n    value: function removeSub(sub) {\n      if (this.subs.length) {\n        var index = this.subs.indexOf(sub);\n\n        if (index > -1) {\n          this.subs.splice(index, 1);\n        }\n      }\n    }\n  }, {\n    key: \"depend\",\n    value: function depend() {\n      if (window.target) {\n        if (this.subs.indexOf(window.target) === -1) {\n          this.addSub(window.target);\n        }\n      }\n    }\n  }, {\n    key: \"notify\",\n    value: function notify() {\n      for (var i = 0, len = this.subs.length; i < len; i++) {\n        this.subs[i].update();\n      }\n    }\n  }]);\n\n  return dep;\n}();\n\n\n\n//# sourceURL=webpack://vue-demo/./core/dep.js?");

/***/ }),

/***/ "./core/index.js":
/*!***********************!*\
  !*** ./core/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vue */ \"./core/Vue.js\");\n\nvar vue = new _Vue__WEBPACK_IMPORTED_MODULE_0__.default({\n  data: {\n    text: \"😁\",\n    obj: {\n      name: \"哈哈\"\n    },\n    arr: [[\"🐭\", \"🐂\", \"🐅\"], 1, 2]\n  }\n});\nvar flag = true;\ndocument.getElementById(\"text\").innerHTML = vue.data.text;\ndocument.getElementById(\"name\").innerHTML = vue.data.obj.name;\ndocument.getElementById(\"array\").innerHTML = vue.data.arr;\n\ndocument.getElementById(\"btn\").onclick = function () {\n  if (flag) {\n    vue.data.text = \"🐶\";\n    vue.data.obj.name = \"狗\";\n    vue.data.arr[0].push(4);\n  } else {\n    vue.data.text = \"🐈\";\n    vue.data.obj.name = \"猫\";\n    vue.data.arr.push(5);\n  }\n\n  flag = !flag;\n};\n\n//# sourceURL=webpack://vue-demo/./core/index.js?");

/***/ }),

/***/ "./core/watcher.js":
/*!*************************!*\
  !*** ./core/watcher.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Watch)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar id = 0;\n\nvar Watch = /*#__PURE__*/function () {\n  function Watch(vm, expOrFn, cb) {\n    _classCallCheck(this, Watch);\n\n    this.vm = vm; // this.expOrFn = expOrFn;\n\n    this.cb = cb;\n    this.id = ++id;\n    this.getter = parsePath(expOrFn);\n    this.value = this.get();\n  }\n\n  _createClass(Watch, [{\n    key: \"get\",\n    value: function get() {\n      window.target = this;\n      var value = this.getter.call(this.vm, this.vm);\n      window.target = null;\n      return value;\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      var oldValue = this.value;\n      this.value = this.get();\n      this.cb.call(this, this.value, oldValue);\n    }\n  }]);\n\n  return Watch;\n}();\n\n\n\nfunction parsePath(path) {\n  var arr = path.split(\".\");\n  return function (obj) {\n    for (var i = 0; i < arr.length; i++) {\n      if (!obj) return;\n      obj = obj[arr[i]];\n    }\n\n    return obj;\n  };\n}\n\n//# sourceURL=webpack://vue-demo/./core/watcher.js?");

/***/ }),

/***/ "./util/index.js":
/*!***********************!*\
  !*** ./util/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"def\": () => (/* binding */ def)\n/* harmony export */ });\nfunction def(object, key, value) {\n  Object.defineProperty(object, key, {\n    enumerable: true,\n    writable: true,\n    configurable: true,\n    value: value\n  });\n}\n\n//# sourceURL=webpack://vue-demo/./util/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./core/index.js");
/******/ 	
/******/ })()
;