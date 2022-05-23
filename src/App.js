import React from 'react';
import { useReducerAsync } from "use-reducer-async";
import someAsync from './components/someAsync';

import logo from './logo.svg';
import './App.css'; 
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

export const CountContext = React.createContext();
const initialState ={count:0, name:"Ivan", status: "idle"};
const reducer =(state, action) =>{
  console.log("ACTION!", action);
  switch (action.type) {
    case 'increment':
        return {...state, count:state.count+1};
    case 'decrement':
      return {...state, count:state.count-1};
    
    case 'setname':
      
      return {...state, name:action.payload};
    
    case 'setstatus':
      
      return {...state, status:action.payload};
    
    case 'reset':
        return initialState;
    default:
      throw new Error('no such action type');
  }
}
   


const asyncActionHandlers = {
  "CALLAPI": ({ dispatch }) => async (action) => {
    dispatch( { type: 'setstatus', payload:"waiting" });
    await someAsync();
    dispatch({ type: 'setstatus', payload: 'success' });
  },
};


function App() {
  const [state, dispatch] = useReducerAsync(reducer, initialState, asyncActionHandlers)
  return (
    <CountContext.Provider value = {{countState:state, countDispatch:dispatch}} >
      <div className="App">
        Count : {state.count}
        <br />
        name : {state.name}
        <br />
        Loading Status: {state.status}
          <ComponentA />
          <ComponentB />
          <ComponentC />
      </div>

      <button onClick={()=> dispatch("CALLAPI")} >CALL api BTN</button>
      <button type="button" onClick={() => dispatch({ type: 'SLEEP', ms: 1000 })}>Click</button>
    </CountContext.Provider>
  );
}

export default App;
