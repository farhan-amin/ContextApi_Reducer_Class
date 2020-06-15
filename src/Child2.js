import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child2= ()=> {
    let [state, dispatch] = useReducer(CounterReducer, 0)
    return(
        <div>
            <h2>This is a counter by using Reducer </h2>
            <h3> The Value of Counter is: {state}</h3>
            <button onClick={()=>dispatch('INCREMENT')} >INREAMENT Reducer
            </button>
            <hr/>
            <button onClick={()=>dispatch('DECREMENT')} >DECREMENT Reducer
            </button>
           

            

        </div>
    )
}
export default Child2;