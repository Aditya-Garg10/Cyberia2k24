import React from 'react'
import './index.css'
import Img from './assets/Cyb.jpg'
import  './index.css'
import Navbar from './components/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Hero from './pages/Hero'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Hero/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
