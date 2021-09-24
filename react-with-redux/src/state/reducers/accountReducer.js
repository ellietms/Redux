// reducer is a function that retrns state
// 2 parameters (action , state )

const reducer = (state = 0 , action ) => {
    switch(action.type){
        case "deposite":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;    
        default:
            return state;    
    }
}


export default reducer;