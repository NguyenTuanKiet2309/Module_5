import "./App.css";
import React, { useState } from "react";

function App(){
  const [counter1,setCounter1]=useState(0);
  const [counter2,setCounter2]=useState(0);
 
    return (
      <div>
      <p>Count:{counter1}</p>
      <button onClick={()=>(setCounter1((previousCounter)=>previousCounter+1))}>Add1</button>
      <p>Count2:{counter2}</p>
      <button onClick={()=>{setCounter2((previousCounter)=>previousCounter+1)}}>Add2</button>
   
      </div>
    );
    }


export default App;
