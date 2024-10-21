import "./App.css";
import { User } from "./User";

function App() {

  const users = [
    {name:"ala", age:43},
    {name:"asd", age:5},
    {name:"xzcvx", age:7},
  ]

  return (
    <div className="App">
      { users.map((user, index) =>{
        return <User key={index} name={user.name} age={user.age}/>
      })}
    </div>
  )
}

export default App;
