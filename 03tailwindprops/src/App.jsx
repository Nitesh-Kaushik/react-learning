import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {

  const [count, setCount] = useState(0)
  let myObj = {
    username: "Nitesh",
    age: 24
  }

  let newArr = [1, 2, 3]
  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

      <Card  channel="niteshKaushik" someObj={[myObj, newArr]}/>

    </>
  )
}

export default App
