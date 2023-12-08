//import logo from './logo.svg';
//import './App.css';
import {connect} from "react-redux";
import Counter from "./modules/redux_One/Count";
//import { DecAction, IncAction } from "./modules/redux1/Action";
import {useDispatch} from 'react-redux';
const App=()=> {
  const dispatch=useDispatch();
  return (
    <div className="App"> 
      
      <header className="App-header">Hi
       {/**1
        * {local_var}
       <button onClick={IncAction}>Increment</button><br/>
       <button onClick={DecAction}>Decrement</button>
        */}
         <Counter/>
        <button onClick={e=>dispatch({type:'INCREMENT'})}>Increment</button>
        <button onClick={e=>dispatch({type:'DECREMENT'})}>Decrement</button>
      </header>
    </div>
  );
}
/**2const mapStateToProps=state=>({
   local_var:state
})*/
//3export default connect(mapStateToProps,{IncAction,DecAction})(App);
export default App;
