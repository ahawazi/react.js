import { useState } from "react";
import "./App.css";

function App() {
  const [inputvalue, setinputvalue] = useState("")
  const handelInputChange =(event)=>{
    setinputvalue(event.target.value)
  }
  return (
    <div className="App">
      <input type="text" onChange={handelInputChange}></input>
      <h1>{inputvalue}</h1>
    </div>
  )
}

export default App;
