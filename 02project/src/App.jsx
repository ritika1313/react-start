import React, { useState } from 'react';
function App() {
const [counter,setCounter] = useState(15)


  const addValue = () => {
    console.log("clicked",Math.random());
    // counter = counter + 1;
    // here we have added the condition that the max increament is 100
    setCounter(counter < 100 ? counter + 1 : 100);
  }

  const reduceValue = () => {
    console.log("clicked",Math.random());
    // here i have added the condition that the max decrement is 0, no negative value is allowed
    setCounter(counter > 0 ? counter - 1 : 0);
  }

  return (
    <>
    <h1>Chai Aur react</h1>
    <h2>Counter value: {counter} </h2>

    <button onClick={addValue}>Add Value</button>
    <br></br>
    <button onClick={reduceValue}>Decrease Value</button>
    </>
  )
}

export default App
