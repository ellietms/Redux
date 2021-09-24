import './App.css';
import {useSelector , useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreaters } from "./state/index";
import { depositeMoney } from './state/action-creators';

function App() {
  //  returning state inside of our store.js
  const account = useSelector((state) => state.account);
  //  dispatch the action creators
  const dispatch = useDispatch();
  const {depositeMoney , withdrawMoney} = bindActionCreators(actionCreaters, dispatch)
  return (
    <div className="App">
      {account}
     <button onClick={() => depositeMoney(1000)}> Deposit </button>  
     <button onClick={() => withdrawMoney(500)}> Withdraw</button>
     <p> World!</p>
    </div>
  );
}

export default App;
