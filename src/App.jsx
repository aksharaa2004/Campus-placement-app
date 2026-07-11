import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddReg from './Components/AddReg'
import Search from './Components/Search'
import { Delete } from './Components/Delete'
import View from './Components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddReg/>
     <Search/>
     <Delete/>
     <View/>
    </>
  )
}

export default App
