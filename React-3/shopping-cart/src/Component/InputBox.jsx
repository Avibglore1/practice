import React from 'react'

function InputBox() {
  const [content,setContent] = React.useState('');
  function handleClick(){
    setContent('');
  }
  function handleChange(e){
    const updatedValue=e.target.value;
    setContent(updatedValue);
  }
  return (
    <>
      <input type='text' value={content} onChange={handleChange}/>
      <button onClick={handleClick}>Alert Change</button>
    </>
    
  )
}

export default InputBox