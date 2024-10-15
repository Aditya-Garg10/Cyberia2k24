import React from 'react'
import logo from '../assets/MSULogo.png'
import Logo from "../assets/Logo.png"
import naac from "../assets/naac.png"
import microsoft from '../assets/microsoft.jpeg'
import Befriends from '../assets/befriends.jpeg'

const Sponsored = () => {
  return (
    <div className='gradient flex flex-col gap-10'>
      <div className="flex h-auto flex-col items-center gap-10 justify-center p-10  ">
        <div className="flex">
          <h1 className='text-2xl pb-2 border-b-2 text-white'>Sponsors</h1>
        </div>
        <div className="flex  flex-row md:flex-col gap-10 justify-center items-center">
            <img src={microsoft} className='h-[30vh] p-5 bg-white' alt="" />                    
        </div>
      </div>
      <div className="flex h-auto flex-col items-center gap-10 justify-center p-10  ">
        <div className="flex">
          <h1 className='text-2xl pb-2 border-b-2 text-white'>Powered By</h1>
        </div>
        <div className="flex  flex-row md:flex-col gap-10 justify-center items-center">
            <img src={Befriends} className='h-[30vh] hover:scale-110 transition-all object-contain' alt="" />            
        </div>
      </div>
      <div className="flex h-auto flex-col items-center gap-10 justify-center p-10  ">
        <div className="flex">
          <h1 className='text-2xl pb-2 md:text-sm border-b-2 text-white'>The Maharaja Sayajirao University of Baroda</h1>
        </div>
        <div className="flex  flex-row  w-full md:flex-col  justify-center items-center">
            <div className="flex h-[50vh] justify-center items-center w-full">
                <img src={logo} className='h-[35vh]' alt="" />
            </div>
            <div className="flex h-[50vh] justify-center sm:p-2 items-center p-10  w-full">
            <iframe className='h-full sm:w-full w-3/4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7382.178273179943!2d73.17868485761481!3d22.31246841837183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf4d168ed471%3A0xc95be30239975099!2sMaharaja%20Sayajirao%20University%2C%20Sayajiganj%2C%20Vadodara%2C%20Gujarat%20390020!5e0!3m2!1sen!2sin!4v1728838031051!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsored
