import React from 'react'
import logo from '../assets/MSULogo.png'
import cross from "../assets/close.png"
import naac from "../assets/naac.png"
import logo2 from '../assets/logo2.png'
import "../index.css"
import Sponsored from './Sponsored'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <div className={`"z-1000 bg-[url('./assets/Cyb.jpg')] bg-fixed bg-no-repeat h-full bg-cover`}>
        <div className="flex  justify-start items-start py-28 px-10 w-full h-full ]">
          <div className=' flex gap-5  flex-col h-[80vh] w-full'>
            <div className='flex  items-center gap-3 h-[30vh] w-full'>
              <div className='flex gap-3'>
                <img src={logo} className='h-[20vh] sm:h-[15vh] pr-4 border-r-[1px] object-contain' alt="" />
                <img src={naac} className='h-[20vh] sm:h-[15vh] pr-4 x object-contain' alt="" />                
              </div>                           
            </div>
            <div className="flex gap-5 flex-col">
              <h4 className='text-yellow-500 md:text-5xl text-7xl'>Innovation Without</h4>
              <h4 className='presented-text md:text-5xl  text-7xl'>LIMITS</h4>
            </div>
            <div className="flex gap-5 flex-col">
              <p className='text-lg md:text-sm text-blue-200'>24th to 26th December 2024</p>
              
            </div>
          </div>
        </div>
      </div>
      <Sponsored/>      
    </div>
  )
}

export default Home
