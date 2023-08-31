
import './App.css';
import React, { useEffect, useState } from'react';


function App() {
  
  const [text, setText] = useState('');
  const[name,setName] = useState('love');

  //variation 1 => Every Render
  // useEffect(() =>{
  //   console.log('UI rendering done');
  // });

  //variation 2 => First Render
  // useEffect(() => {
  //   console.log('UI rendering done');
  // }, []);

  //variation 3 => on first render + whenever dependencies changes
  // useEffect(() => {
  //   console.log('UI rendering done');
  // }, [name]);

  //variation 4 => to handle unmounting of a component
  useEffect(() => {
    //add event listener
    console.log('listener added');

    return () => {
      console.log('listener removed');
    }
  }, [text]);


  function changeHandler(e) {
    setText(e.target.value);
    console.log(text);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
