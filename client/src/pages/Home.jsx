import React from 'react'
import logo from '../assets/MSULogo.png'
import cross from "../assets/close.png"
import naac from "../assets/naac.png"
import logo2 from '../assets/logo2.png'
import "../index.css"
import Sponsored from './Sponsored'
import Footer from '../components/Footer'
import Login from './Login'

const Home = () => {
  return (
    <div>
      <div className={`text-8xl   w-full h-screen bg-[url("./assets/Cyb.jpg")] bg-no-repeat bg-cover `}>
        <div className="flex  justify-start items-start py-28 px-10 w-full h-screen bg-[#0000006b]">
          <div className=' flex gap-5  flex-col h-[80vh] w-full'>
            <div className='flex  items-center gap-3 h-[30vh] w-full'>
              <div>
                <img src={logo} className='h-[20vh] object-contain' alt="" /></div>
              <div>
                <img src={cross} className='h-[2vh]' alt="" /></div>
              <div className='justify-end flex flex-col items-end'>
                <img src={logo2} className='w-[20vw] sm:w-[45vw] object-contain' alt="" />
                <p className='text-blue-200 font-mono md:text-[7px] text-xs'>unleash the geek within</p>
              </div>
            </div>
            <div className="flex gap-5 flex-col">
              <h4 className='text-secondary md:text-5xl text-7xl'>Innovative Without</h4>
              <h4 className='presented-text md:text-5xl  text-7xl'>LIMITS</h4>
            </div>
            <div className="flex gap-5 flex-col">
              <p className='text-lg md:text-sm text-blue-200'>24th to 26th December 2024</p>
              
            </div>
          </div>
        </div>
      </div>
      <Sponsored/>
      <Footer />
    </div>
  )
}

export default Home
