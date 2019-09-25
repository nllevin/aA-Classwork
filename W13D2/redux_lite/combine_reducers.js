function combineReducers(reducerResponsibilities) {
  return (prevState = {}, action = { type: null }, subscriptions = []) => {
    const newState = {};
    let stateChange = false;

    Object.entries(reducerResponsibilities).forEach( ([stateProp, reducer]) => {
      const oldVal = prevState[stateProp];
      const newVal = reducer(oldVal, action);
      if (oldVal !== newVal) {
        newState[stateProp] = newVal;
        stateChange = true;
      }
    });

    if (stateChange) { subscriptions.forEach(callback => callback(newState)); }
    return Object.assign(prevState, newState);
  }
}

module.exports = combineReducers;

/*
const myNoiseReducer = (prevState = "peace and quiet", action) => {
  switch (action.type) {
    case "noisy action":
      return action.noise;
    default:
      return prevState;
  }
};

const myNoisyAction = {
  type: "noisy action",
  noise: "Car alarm"
};

const myInconsequentialAction = {
  type: "a type no one cares about",
  data: {
    thisThing: "will not get used anyway"
  }
};

const myInitialState = {
  noise: "peace and quiet"
};

const myRootReducer = combineReducers({
  noise: myNoiseReducer,
});

let newState = myRootReducer(myInitialState, myInconsequentialAction);
console.log(newState);
// => { noise: "peace and quiet" }

newState = myRootReducer(newState, myNoisyAction);
console.log(newState);
// => { noise: "Car alarm" }

myRootReducer(newState, myInconsequentialAction);
console.log(newState);
// => { noise: "Car alarm" }
*/