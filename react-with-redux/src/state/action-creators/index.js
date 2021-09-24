// create actions and despatch it
export const depositeMoney = (amount) => {
    return(dispatch) => {
        dispatch({
            type: "deposit",
            payload : amount
        })
    }
}
// second action
export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}

