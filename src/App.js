import { useState } from "react";
import "./App.css";

function App() {
  const [age, setAge] = useState(0)
  return (
    <div className="App">
      <h1>{age}</h1>
      <button onClick={()=> setAge(age+1)}>increaseAge</button>
      <button onClick={()=> setAge(age-1)}>decreaseAge</button>
      <button onClick={()=> setAge(0)}>reset</button>
    </div>
  )
}

export default App;
