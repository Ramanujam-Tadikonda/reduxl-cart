import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// store - stores data, think of state
// reducer - function that used to update store

// reducer stuff

// reducer takes two arguments - state, action
// state - old state/state before update
// action -what happened / what update
// return updated or old state

import { createStore } from 'redux';

// store.getState() - useing getState(), we can get back to the previous/Initial state
// dispatch method - sent actions to the store
// actions (objects) - MUST HAVE TYPE PROPERTY - what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)

// initial state
const initialStore = {
  count: 0,
  name: 'John',
};

// reducer
function reducer(state, action) {
  console.log('Redux reducer', { state, action });
  if (action.type === 'DECREASE') {
    return { ...state, count: state.count - 1 }
  }
  if (action.type === 'INCREASE') {
    return {...state, count: state.count + 1}
  }
  if (action.type === 'RESET') {
    return {...state, count: 0 }
  }
  if (action.type === 'CHANGE_NAME') {
    return { ...state, name: 'bob' }
  }
  return state;
}

// store
const store = createStore(reducer, initialStore);
// dispatch
// store.dispatch({ type: 'DECREASE' })
store.dispatch({ type: 'CHANGE_NAME'})

function App() {
  // cart setup

  console.log(store.getState());

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
