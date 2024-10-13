import React from 'react'
import logo from '../assets/MSULogo.png'
import "../index.css"

const Hero = () => {
  return (
    <div>
      <div className={`text-8xl   w-full h-screen bg-[url("./assets/Cyb.jpg")] bg-no-repeat bg-cover `}>
      <div className="flex  justify-center items-center w-full h-screen bg-[#0000006b]">
       <div className="flex gap-10">
        <img src={logo} className='h-[150px] w-[150px] border-none' alt="" />
        <p className='text-5xl font-semibold from-mono text-white'>X</p>
        
        <h1 className='text-white cyberia'>cyberia</h1>
       </div>
      </div>
      
    </div>
    </div>
  )
}

export default Hero
