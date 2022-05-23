import React, {useContext} from 'react';
import {CountContext} from '../App'
import someAsync from './someAsync';

export default function ComponentA() {
    const { count, countDispatch } = useContext(CountContext);


  const onSubmit = async (e) => {
    e.preventDefault();

    countDispatch({type: "CALLAPI"});
    // countDispatch({ type: 'setstatus', payload:"waiting" });

    // try {
    //   await someAsync();
    //   countDispatch({ type: 'setstatus', payload: 'success' });
    // } catch (error) {
    //   countDispatch({ type: 'setstatus', payload: "failed" });
    // }
  };
    
    return <div>
        Component A

        <button onClick={() => countDispatch({type: 'increment'})} >Increment</button>
        <button onClick={() => countDispatch({type: 'decrement'})} >Decrement</button>
        <button onClick={() => countDispatch({ type:'reset'})} >Reset</button>
        <button onClick={() => countDispatch({ type:'setname', payload:"David"})} >Set name</button>
        <button onClick={ onSubmit }>Submit </button>
    </div>
}