import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px -2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg
         bg-white rounded-3xl px-3 py-2'>
          
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("violet")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "violet"}}>violet</button>
          <button onClick={() => setColor("bisque")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "bisque"}}>bisque</button>
          <button onClick={() => setColor("blueviolet")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blueviolet"}}>blueviolet</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "yellow"}}>yellow</button>
          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "black"}}>black</button>
         
         </div>
           
      </div>
    </div>
  )
}

export default App
