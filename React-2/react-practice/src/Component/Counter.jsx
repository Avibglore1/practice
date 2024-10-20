import React from 'react'

function Counter(props){
    const [value,setValue] = React.useState(props.index);

   function handleIncrement(){
   return setValue(value+1);
}
function handleDecrement(){
    return setValue(value-1);
}
return <>
<div>{value}</div>
<button onClick={handleIncrement}>+Plus</button>
<button onClick={handleDecrement}>-Minus</button>
</>
}

export default Counter