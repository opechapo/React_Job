import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Pages/HomePage'
import NavBar from './Components/navBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <HomePage/>
    
      
    </>
  )
}

export default App
