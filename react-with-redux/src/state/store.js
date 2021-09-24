//  our store
import {applyMiddleware, createStore } from "redux";
import {reducers} from "./reducers/index";
import thunk from "redux-thunk";
// reducers ,  default state
//  create our store with reducers function we get from index.js and an empty {} which is our state
// const store = createStore(reducers, {})
export const store =  createStore(reducers, {}, applyMiddleware(thunk))


