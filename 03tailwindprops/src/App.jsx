import React from "react";
import Card from './Components/Card'

function App() {
  let myObj = {
    username: "Ritika",
    age: 20
  }

  let newArr = [1,2,3]

  return (
    <>
    <h1></h1>
    <Card channel="chaiAurCode" someObje ={newArr} />
    </>
  );
}

export default App;