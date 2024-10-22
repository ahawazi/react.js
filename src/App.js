import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res.data);
      setCatFact(res.data.fact);
    });
  };

  return (
    <div className="App">
      <button onClick={fetchFact}>fetch data</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
