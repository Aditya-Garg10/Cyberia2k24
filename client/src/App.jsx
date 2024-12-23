import React, { useContext, useEffect, useLayoutEffect } from 'react'
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
import axios from 'axios'
import Footer from './components/Footer'
import EventRegister from './pages/EventRegister'


export const HOST = "https://cyberia2k24-w9pk.onrender.com"

const App = () => {

  const { events,setEvents } = useContext(eventContext)


  useEffect(()=>{ 
    const getEventsData = async () =>{
      try {
        const response = await axios.get(`${HOST}/api/events/getAllEvents`);
        // console.log(response);
        setEvents(response.data)
        localStorage.setItem("eventsData",events);
      } catch (error) {
        console.log(error)
      }
    }   
    getEventsData()        
    
},[])


  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/event' element={<div className='w-full h-full'><Events/></div>} />
      <Route path='/about' element={<About/>} />
      <Route path='/team' element={<Team/>} />
      <Route path='/register' element={<EventRegister/>} />      
    {/* <Route path='/register' element={<Register/>} /> */}            
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
