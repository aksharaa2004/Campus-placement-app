import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddReg from './Components/AddReg'
import Search from './Components/Search'
import { Delete } from './Components/Delete'
import View from './Components/View'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AddReg/>}/>\
      <Route path='/Search' element={<Search/>}/>
      <Route path='/Delete' element={<Delete/>}/>
      <Route path='/View' element={<View/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
