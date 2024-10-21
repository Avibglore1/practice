import React, { useState } from 'react'

function Shopping() {
const [content,setContent] = useState('');
const [tasks,setTask]=useState([]);

function handleInput(e){
const updatedValue = e.target.value;
setContent(updatedValue);
}
function handleAdd(){
const newItem = content;
const newArray = [...tasks];
newArray.push(newItem);
setTask(newArray);
setContent('');
}


function handleDelete(index){
const newArray = [...tasks];
newArray.splice(index,1);
setTask(newArray);
}

  return (
    <div className=''>
        <div className='input-box'>
            <input type='text' value={content} onChange={handleInput}/>
            <button onClick={handleAdd}>Add Task</button>
        </div>
        <ul className='list'>
            {tasks.map((task,index)=>{
                return <li key={index}><span>{task}</span><button onClick={()=>handleDelete(index)}>Delete</button></li>})
            }  
        </ul>
    </div>
  )
}

export default Shopping