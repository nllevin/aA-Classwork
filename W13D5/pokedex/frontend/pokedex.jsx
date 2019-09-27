import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//TESTING ONLY BELOW
// import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
// import { fetchAllPokemon } from './util/api_util';
// import { selectAllPokemon } from './reducers/selectors'
//TESTING ONLY ABOVE

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, rootEl);

  //TESTING ONLY BELOW
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.getState = store.getState;
  // window.requestAllPokemon = requestAllPokemon;
  // window.dispatch = store.dispatch;
  // window.selectAllPokemon = selectAllPokemon;
});