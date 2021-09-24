//  our store

import {createStore } from "redux";
import reducers from "./index";
// reducers ,  default state

const store = createStore(reducers, {})