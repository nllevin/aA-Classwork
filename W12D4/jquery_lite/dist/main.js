/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(collection) {\n    this.collection = collection;\n  }\n\n  html(string) {\n    if (string === undefined) {\n      return this.collection[0].innerHTML;\n    } else {\n      this.collection.forEach(node => node.innerHTML = string);\n    }\n  }\n\n  empty() {\n    this.collection.forEach(node => node.innerHTML = \"\");\n  }\n\n  append(el) {\n    if (typeof el === \"string\") {\n      this.collection.forEach(node => node.innerHTML += el);\n    } else if (el instanceof HTMLElement) {\n      this.collection.forEach(node => node.innerHTML += el.outerHTML);\n    } else if (el instanceof DOMNodeCollection) {\n      this.collection.forEach(parentNode => {\n        el.forEach(childNode => parentNode.innerHTML += childNode.outerHTML);\n      });\n    }\n  }\n\n  attr(...args) {\n    if (args.length === 1) {\n      if (typeof args[0] === \"string\") {\n        return this.collection[0].getAttribute(args[0]);\n      } else if (args[0] instanceof Object) {\n        this.collection.forEach(node => {\n          Object.entries(args[0]).forEach(([key, val]) => node.setAttribute(key, val));\n        });\n      }\n    } else if (args.length > 1) {\n      if (args[1] instanceof Function) {\n        this.collection.forEach( (node, idx) => {\n          node.setAttribute(\n            args[0], \n            args[1].call(node, idx, node.getAttribute(args[0]))\n            );\n        });\n      } else {\n        this.collection.forEach(node => node.setAttribute(args[0], args[1]));\n      }\n    }\n  }\n\n  addClass(className) {\n    if (typeof className === \"string\") {\n      this.collection.forEach(node => node.className += ` ${className}`);\n    } else if (className instanceof Function) {\n      this.collection.forEach( (node, idx) => {\n        let newClassName = className.call(node, idx, node.className);\n        node.className += ` ${newClassName}`;\n      });\n    }\n  }\n\n  removeClass(className) {\n    const removeClassFromNode = (node, classes) => {\n      let currentClasses = node.className.split(\" \");\n      let removeClasses = classes.split(\" \");\n      removeClasses.forEach(removeClass => {\n        let idx = currentClasses.indexOf(removeClass);\n        if (idx !== -1) {\n          currentClasses.splice(idx, 1);\n        }\n      });\n      node.className = currentClasses.join(\" \");\n    }\n\n    if (typeof className === 'string') {\n      this.collection.forEach(node => removeClassFromNode(node, classes));\n    } else if (className instanceof Function) {\n      this.collection.forEach( (node, idx) => {\n        let removeClasses = className(idx, node.className);\n        removeClassFromNode(node, removeClasses);\n      });\n    }\n  }\n\n  children() {\n    let allChildren = [];\n    this.collection.forEach(node => {\n      allChildren = allChildren.concat(Array.from(node.children));\n    });\n    return new DOMNodeCollection(allChildren);\n  }\n\n  parent() {\n    let allParents = [];\n    this.collection.forEach(node => {\n      if (allParents.indexOf(node.parentElement) === -1) {\n        allParents.push(node.parentElement);\n      }\n    });\n    return new DOMNodeCollection(allParents);\n  }\n\n  find(selector) {\n    let result = [];\n    this.collection.forEach(node => {\n      result = result.concat(Array.from(node.querySelectorAll(selector)));\n    });\n    return new DOMNodeCollection(result);\n  }\n\n  remove() {\n    this.collection.forEach(node => node.remove());\n  }\n\n  on(event, handler) {\n    this.collection.forEach(node => {\n      node.addEventListener(event, handler);\n      this.listeners = this.listeners || [];\n      this.listeners.push([event, handler]);\n    });\n  }\n\n  off(event) {\n    this.collection.forEach(node => {\n      let remainingListeners = [];\n      this.listeners = this.listeners || [];\n      this.listeners.forEach(listener => {\n        if (listener[0] === event) {\n          node.removeEventListener(event, listener[1]);\n        } else {\n          remainingListeners.push(listener);\n        }\n      });\n      this.listeners = remainingListeners;\n    });\n  }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\nlet functionQueue = [];\nwindow.addEventListener(\"DOMContentLoaded\", event => {\n  functionQueue.forEach(func => func());\n});\n\nfunction $l(el) {\n  if (typeof el === 'string') {\n    const collection = Array.from(document.querySelectorAll(el));\n    return new DOMNodeCollection(collection);\n  } else if (el instanceof HTMLElement) {\n    return new DOMNodeCollection([el]);\n  } else if (el instanceof Function) {\n    functionQueue.push(el);\n  }\n}\n\n$l.extend = function(...objects) {\n  let mergedObj = {};\n  objects.forEach(obj => {\n    Object.entries(obj).forEach( ([key, val]) => mergedObj[key] = val);\n  });\n  return mergedObj;\n};\n\n$l.ajax = function(options) {\n  const defaults = {\n    method: \"GET\",\n    url: \"/\",\n    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',\n    data: \"\",\n    success: () => undefined,\n    error: () => undefined\n  };\n  options = $l.extend(defaults, options);\n  const xhr = new XMLHttpRequest();\n  xhr.open(options[\"method\"], options[\"url\"]);\n  xhr.onload = () => options[\"success\"](xhr.response);\n  xhr.onerror = () => options[\"error\"](xhr.response);\n  xhr.send(options[\"data\"]);\n};\n\n// AJAX test\n\n$l.ajax({\n  method: 'GET',\n  url: \"http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b\",\n  success: function(data) {\n    console.log(\"We have your weather!\")\n    console.log(data);\n  },\n  error: function() {\n    console.error(\"An error occurred.\");\n  }\n});\n\nwindow.$l = $l;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });