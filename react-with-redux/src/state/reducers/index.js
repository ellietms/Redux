//  combine all reducers

import {combineReducers} from "redux";
import accountReducer from "./accountReducer";

//  function that returns an object with a key which has the value from the reducer function
const reducers = combineReducers({
    account: accountReducer
})

export default reducers;