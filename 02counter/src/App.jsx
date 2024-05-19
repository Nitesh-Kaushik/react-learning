import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 5

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    //  console.log("value added", Math.random());
     counter = counter + 1
    setCounter(counter +1)
  }
  return (
   <>
      <h1>react learning</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>add value</button>
      <br />
      <button>remove value</button>
   </>
  )
}

export default App
