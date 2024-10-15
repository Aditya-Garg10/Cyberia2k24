import React, { useContext, useEffect } from 'react'
import './index.css'
import Img from './assets/Cyb.jpg'
import  './index.css'
import Navbar from './components/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Events  from './pages/Events'
import About from './pages/About'
import Team from './pages/Team'
import Register from './pages/Register'
import { eventContext } from './context/Context'


const App = () => {

  
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/event' element={<div className='w-full h-full'><Events/></div>} />
      <Route path='/about' element={<About/>} />
      <Route path='/team' element={<Team/>} />
      <Route path='/register' element={<Register/>} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
