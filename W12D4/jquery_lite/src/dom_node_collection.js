class DOMNodeCollection {
  constructor(collection) {
    this.collection = collection;
  }

  html(string) {
    if (string === undefined) {
      return this.collection[0].innerHTML;
    } else {
      this.collection.forEach(node => node.innerHTML = string);
    }
  }

  empty() {
    this.collection.forEach(node => node.innerHTML = "");
  }

  append(el) {
    if (typeof el === "string") {
      this.collection.forEach(node => node.innerHTML += el);
    } else if (el instanceof HTMLElement) {
      this.collection.forEach(node => node.innerHTML += el.outerHTML);
    } else if (el instanceof DOMNodeCollection) {
      this.collection.forEach(parentNode => {
        el.forEach(childNode => parentNode.innerHTML += childNode.outerHTML);
      });
    }
  }

  attr(...args) {
    if (args.length === 1) {
      if (typeof args[0] === "string") {
        return this.collection[0].getAttribute(args[0]);
      } else if (args[0] instanceof Object) {
        this.collection.forEach(node => {
          Object.entries(args[0]).forEach(([key, val]) => node.setAttribute(key, val));
        });
      }
    } else if (args.length > 1) {
      if (args[1] instanceof Function) {
        this.collection.forEach( (node, idx) => {
          node.setAttribute(
            args[0], 
            args[1].call(node, idx, node.getAttribute(args[0]))
            );
        });
      } else {
        this.collection.forEach(node => node.setAttribute(args[0], args[1]));
      }
    }
  }

  addClass(className) {
    if (typeof className === "string") {
      this.collection.forEach(node => node.className += ` ${className}`);
    } else if (className instanceof Function) {
      this.collection.forEach( (node, idx) => {
        let newClassName = className.call(node, idx, node.className);
        node.className += ` ${newClassName}`;
      });
    }
  }

  removeClass(className) {
    const removeClassFromNode = (node, classes) => {
      let currentClasses = node.className.split(" ");
      let removeClasses = classes.split(" ");
      removeClasses.forEach(removeClass => {
        let idx = currentClasses.indexOf(removeClass);
        if (idx !== -1) {
          currentClasses.splice(idx, 1);
        }
      });
      node.className = currentClasses.join(" ");
    }

    if (typeof className === 'string') {
      this.collection.forEach(node => removeClassFromNode(node, classes));
    } else if (className instanceof Function) {
      this.collection.forEach( (node, idx) => {
        let removeClasses = className(idx, node.className);
        removeClassFromNode(node, removeClasses);
      });
    }
  }

  children() {
    let allChildren = [];
    this.collection.forEach(node => {
      allChildren = allChildren.concat(Array.from(node.children));
    });
    return new DOMNodeCollection(allChildren);
  }

  parent() {
    let allParents = [];
    this.collection.forEach(node => {
      if (allParents.indexOf(node.parentElement) === -1) {
        allParents.push(node.parentElement);
      }
    });
    return new DOMNodeCollection(allParents);
  }

  find(selector) {
    let result = [];
    this.collection.forEach(node => {
      result = result.concat(Array.from(node.querySelectorAll(selector)));
    });
    return new DOMNodeCollection(result);
  }

  remove() {
    this.collection.forEach(node => node.remove());
  }

  on(event, handler) {
    this.collection.forEach(node => {
      node.addEventListener(event, handler);
      this.listeners = this.listeners || [];
      this.listeners.push([event, handler]);
    });
  }

  off(event) {
    this.collection.forEach(node => {
      let remainingListeners = [];
      this.listeners = this.listeners || [];
      this.listeners.forEach(listener => {
        if (listener[0] === event) {
          node.removeEventListener(event, listener[1]);
        } else {
          remainingListeners.push(listener);
        }
      });
      this.listeners = remainingListeners;
    });
  }
}

module.exports = DOMNodeCollection;