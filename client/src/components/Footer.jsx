import React from 'react'
import logo2 from '../assets/logo2.png'

const Footer = () => {
  return (
    <div>
        <hr />
      <div className="flex bg-black items-center justify-between  h-[40vh] md:h-[30vh] w-full">
            <div className="flex justify-start items-start p-10 h-full w-1/3 md:w-full md:items-center md:justify-center ">
            <div className='justify-end flex flex-col items-end'>
                <img src={logo2} className='w-[20vw]  sm:w-[55vw] object-contain' alt="" />
                <p className='text-blue-200 font-mono md:text-[7px] text-xs'>unleash the geek within</p>
              </div>
            </div>
            <div className="flex  md:hidden flex-col justify-center items-center h-full w-2/3 ">
                <div className="flex w-full flex-row  justify-around ">
                    <h1 className='text-xl  text-blue-300'>Connect Us</h1>
                    <h1 className='text-xl  text-blue-300'>Supporters</h1>
                    <h1 className='text-xl  text-blue-300'>Quick Links</h1>
                    
                </div>
                <div className='flex w-full flex-row  mt-3 justify-around '>
                    <p className='text-sm text-white '>Instagram</p>
                    <p className='text-sm text-white '>Befriends</p>
                    <p className='text-sm text-white '>Events</p>
                </div>
                <div className='flex w-full flex-row mt-3 justify-around '>
                    <p className='text-sm text-white '>Whatsapp</p>
                    <p className='text-sm text-white '>Microsoft Learn</p>
                    <p className='text-sm text-white '>Register</p>
                </div>
                <div className='flex w-full flex-row mt-3  justify-around '>
                    <p className='text-sm text-white '>Youtube</p>
                    <p className='text-sm text-white '></p>
                    <p className='text-sm text-white'>Team</p>
                </div>
                                
            </div>
      </div>
    </div>
  )
}

export default Footer
