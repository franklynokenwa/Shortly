import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import allReducers from './Reducers/Index'
import {Provider} from 'react-redux'

let store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


/*

//Store

//actions
const Increment = () => {
  return({
    type:"INCREMENT"
  })
}

const Decrement = () => {
  return({
    type:"DECREMENT"
  })
}

//reducer
const counterReducer = (state = 0, action) => {
  switch(action.type){
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state
  }

}

let store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => console.log(store.getState()));

//dispatch
store.dispatch(Increment());

store.dispatch(Increment());
store.dispatch(Increment());

store.dispatch(Decrement());

*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

