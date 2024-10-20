import React from 'react'
import Counter from './Counter'
function CounterParent(){
    return <>
    <Counter index={1}></Counter>
    <Counter index={100}></Counter>
    <Counter index={1000}></Counter>
    </>
   
}

export default CounterParent