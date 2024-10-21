import { useState } from "react";
import "./App.css";

function App() {
const [showText, setShowText] = useState(true);
  return (
    <div className="App">
      <button onClick={()=> setShowText(!showText)}>show/hide</button>
      {showText && <h2>asdasdasd</h2>}
    </div>
  )
}

export default App;
