const combineReducers = require("./combine_reducers.js");

class Store {
  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = this.rootReducer();
    this.subscriptions = [];
  }

  getState() {
    return Object.assign({}, this.state);
  }

  dispatch(action) {
    this.state = this.rootReducer(this.getState(), action, this.subscriptions);
  }

  subscribe(callback) {
    this.subscriptions.push(callback);
  }
}

/*
// Phase 3 Sample Code
// define a reducer for user:
const userReducer = (oldUser = null, action) => {
  if (action.type === "new user") {
    return action.user;
  }
  return oldUser;
};

// create a rootReducer:
const rootReducer = combineReducers({
  user: userReducer
});

// create a store using the rootReducer:
const store = new Store(rootReducer);

// get the state:
console.log(store.getState()); // => {}

// invoke the dispatch function to update the user key:
const action = {
  type: "new user",
  user: "Jeffrey Fiddler"
};

store.dispatch(action);
console.log(store.getState()); // => { user: "Jeffrey Fiddler" }
*/

/*
// Phase 4 Sample Code
const actionCreator1 = value => ({
  type: "add",
  value
});

const actionCreator2 = value => ({
  type: "subtract",
  value
});

const actionCreator3 = value => ({
  type: "no change",
  value
});

const numberReducer = (num = 0, action) => {
  switch (action.type) {
    case "add":
      return num + action.value;
    case "subtract":
      return num - action.value;
    default:
      return num;
  }
}

const rootReducer = combineReducers({
  number: numberReducer
});

const store = new Store(rootReducer);

console.log(store.getState()) // => { number: 0 }

const announceStateChange = nextState => {
  console.log(`That action changed the state! Number is now ${nextState.number}`);
}

store.subscribe(announceStateChange);

store.dispatch(actionCreator1(5)); // => "That action changed the state! Number is now 5"
store.dispatch(actionCreator1(5)); // => "That action changed the state! Number is now 10"
store.dispatch(actionCreator2(7)); // => "That action changed the state! Number is now 3"
store.dispatch(actionCreator3(7)); // => Nothing should happen! The reducer doesn't do anything for type "no change"
store.dispatch(actionCreator1(0)) // => Nothing should happen here either. Even though the reducer checks for the "add" action type, adding 0 to the number won't result in a state change.

console.log(store.getState()); // => { number: 3 }
*/