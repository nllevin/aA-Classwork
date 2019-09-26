import configureStore from './store/store';
import Root from './components/root';
import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  
  const rootElement = document.getElementById('content');
  ReactDOM.render(<Root store={ store } />, rootElement);
  
  
  window.store = store;
})
