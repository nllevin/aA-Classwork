const DOMNodeCollection = require("./dom_node_collection");
let functionQueue = [];
window.addEventListener("DOMContentLoaded", event => {
  functionQueue.forEach(func => func());
});

function $l(el) {
  if (typeof el === 'string') {
    const collection = Array.from(document.querySelectorAll(el));
    return new DOMNodeCollection(collection);
  } else if (el instanceof HTMLElement) {
    return new DOMNodeCollection([el]);
  } else if (el instanceof Function) {
    functionQueue.push(el);
  }
}

$l.extend = function(...objects) {
  let mergedObj = {};
  objects.forEach(obj => {
    Object.entries(obj).forEach( ([key, val]) => mergedObj[key] = val);
  });
  return mergedObj;
};

$l.ajax = function(options) {
  const defaults = {
    method: "GET",
    url: "/",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    data: "",
    success: () => undefined,
    error: () => undefined
  };
  options = $l.extend(defaults, options);
  const xhr = new XMLHttpRequest();
  xhr.open(options["method"], options["url"]);
  xhr.onload = () => options["success"](xhr.response);
  xhr.onerror = () => options["error"](xhr.response);
  xhr.send(options["data"]);
};

// AJAX test

$l.ajax({
  method: 'GET',
  url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b",
  success: function(data) {
    console.log("We have your weather!")
    console.log(data);
  },
  error: function() {
    console.error("An error occurred.");
  }
});

window.$l = $l;