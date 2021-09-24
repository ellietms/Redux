//  our store

import {createStore } from "redux";
import reducers from "./reducers/index";
// reducers ,  default state

//  create our store with reducers function we get from index.js and an empty {} which is our state
// const store = createStore(reducers, {})
const store = ( ) => {
    return (createStore(reducers, {}))
}

export default store;
