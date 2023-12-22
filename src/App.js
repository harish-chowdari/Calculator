import Keypad from "./Keypad";
import React from "react";
import "./App.css"
export default function App() {

  const [input,setInput]=React.useState("")

  function handleClick(value) {
    setInput(input+value)
  }

  function handleEval(){
    setInput(eval(input))
  }

  function handleClear() {
    setInput("")
  }

  

  return (
    <div className="container">
    <h2>Calculator</h2>

    

    <div className="content">

    <input className="output" type="text"
    value={input} />
    <Keypad handleClick={handleClick} handleEval={handleEval} handleClear={handleClear} />

    </div>

    </div>
  )
}
