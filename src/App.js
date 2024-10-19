import "./App.css";

function App() {

  const names = ["ala", "alom", "lao"]

  return (
    <div className="App">
      {
      names.map((name, index)=>{
        return <h1 key={index}>{name}</h1>
      })}
    </div>
  )
}

export default App;
