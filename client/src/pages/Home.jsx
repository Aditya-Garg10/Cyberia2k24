import React from 'react'
import logo from '../assets/MSULogo.png'
import cross from "../assets/close.png"
import naac from "../assets/naac.png"
import logo2 from '../assets/logo2.png'
import "../index.css"
import Sponsored from './Sponsored'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ThreeDCardDemo } from '../components2/ui/test'




const Home = () => {
  return (
    <div>
      <div className={`" bg-[url('./assets/metaverseBg.jpg')] bg-blend-multiply bg-[#0000008c]  bg-fixed bg-no-repeat h-full bg-cover`}>
        <div className="flex  justify-start items-start py-28 px-10 w-full h-full ]">
          <div className=' flex gap-5  flex-col h-[80vh] w-full'>
            <div className='flex  items-center gap-3 h-[30vh] w-full'>
            <Link to="/"><h1 className='text-6xl font-light font-spaceAgeFont text-white  sm:text-3xl'>CYBERIA</h1>
          <p className='text-wrap sm:w-2/3  text-gray-300  text-end text-[17px] sm:text-xs font-light'>Unleash the Geek Within</p></Link>                          
            </div>
            <div className="flex gap-5 flex-col">
              <h4 className='text-purple-300  drop-shadow-lg shadow-white md:text-5xl text-7xl'>Innovating Without</h4>
              <h4 className='presented-text text-white md:text-5xl   text-7xl'>LIMITS</h4>
        
            </div>
            <div className="flex gap-5 flex-col">
              <p className='text-lg md:text-sm text-blue-200'>22th to 24th December 2024</p>              
            </div>
          </div>
        </div>
      </div>
      <Sponsored/>      
        
    </div>
  )
}

export default Home
