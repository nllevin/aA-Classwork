Function.prototype.myBind = function (context) {
  return () => this.apply(context);
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"


// myThrottle
Function.prototype.myThrottle = function (interval) {
  let tooSoon = false;
  let throttledFunc = this;

  return (...args) => {  
    if (!tooSoon) {
      tooSoon = true;
      setTimeout( () => tooSoon = false, interval );
      throttledFunc(...args);
    }
  };
};

class Neuron {
  fire() {
    console.log("Firing!");
  }
}

const neuron = new Neuron();
// When we create a new Neuron,
// we can call #fire as frequently as we want

// The following code will try to #fire the neuron every 10ms. Try it in the console:
const interval = setInterval(() => {
  neuron.fire();
}, 10);

neuron.fire = neuron.fire.myThrottle(500);

clearInterval(interval);


// myDebounce

Function.prototype.myDebounce = function (interval) {
  let debouncedFunc = this;
  let timeoutID;
  return (...args) => {
    clearTimeout(timeoutID);
    date1 = new Date();
    timeoutID = setTimeout( (...args) => debouncedFunc(...args), interval);
  };
};

// test example

class SearchBar {
  constructor() {
    this.query = "";

    this.type = this.type.bind(this);
    this.search = this.search.bind(this);
  }

  type(letter) {
    this.query += letter;
    this.search();
  }

  search() {
    console.log(`searching for ${this.query}`);
  }
}

const searchBar = new SearchBar();

const queryForHelloWorld = () => {
  searchBar.type("h");
  searchBar.type("e");
  searchBar.type("l");
  searchBar.type("l");
  searchBar.type("o");
  searchBar.type(" ");
  searchBar.type("w");
  searchBar.type("o");
  searchBar.type("r");
  searchBar.type("l");
  searchBar.type("d");
}


// Assign searchBar.search to the returned debounced version
searchBar.search = searchBar.search.myDebounce(0);


queryForHelloWorld();



