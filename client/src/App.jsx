import React from 'react'
import './index.css'
import Img from './assets/Cyb.jpg'
import  './index.css'
import Navbar from './components/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import LoginForm from './pages/Login'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<LoginForm/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
