import { useState } from "react"
import './App.css';

function App() {
  let [color, setColor] = useState("black")
  
  return (
  
    <div className="container" style={{backgroundColor: color}}>
      <h1 >my color is {color}</h1>
      
      <button onClick={()=>setColor("Blue")}>Blue</button>
      <button onClick={()=>setColor("red")}>Red</button>
      <button onClick={()=>setColor("pink")}>Pink</button>
      <button onClick={()=>setColor("white")}>White</button>
    </div>
  )
}

export default App
