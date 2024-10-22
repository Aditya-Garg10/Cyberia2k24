import React from 'react'
import img1 from "../assets/Logo.png"
import { FaBars, FaRegUser } from "react-icons/fa";
import { Dropdown, message, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/MSULogo.png'
import cross from "../assets/close.png"
import naac from "../assets/naac.png"

const onClick = ({ key }) => {
  if(key === "1"){

  }
  message.info(`Click on item ${key}`);
};


const Navbar = () => {

  const navigate = useNavigate()
  const items = [
    {
      label: 'Login',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  return (
    <div>
      <div className="flex  justify-between px-10 absolute backdrop-blur-sm flex-row  bg-[#00000054] w-full h-[15vh]">
        <div className="flex  gap-0 w-1/3 justify-start items-center">
        <div className='flex gap-3'>
                <Link to="/"><img src={logo} className='h-[14vh] sm:h-[15vh] pr-4  object-contain' alt="" />                              </Link>
              </div>           
        </div>
        <div className='flex md:hidden w-1/3 gap-10 items-center justify-center flex-row  '>
          <div className="flex  flex-row w-full  gap-6 justify-evenly font-mono  items-center">
          <button onClick={()=>navigate("/event")}><h1 className='text-white hover:cursor-pointer  border-purple-600 text-sm hover:border-b-2 justify-center my-2 flex items-center hover:bg-[#ffffff08]  p-2 hover:transition-all '>Events</h1></button>
          <Link to="/about"><h1 className='text-white hover:cursor-pointer border-purple-600  text-sm hover:border-b-2 justify-center my-2 flex items-center hover:bg-[#ffffff08]  p-2 hover:transition-all '>About</h1></Link>
          <Link to="/team"><h1 className='text-white hover:cursor-pointer border-purple-600 text-sm hover:border-b-2 justify-center my-2 flex items-center hover:bg-[#ffffff08]  p-2 hover:transition-all '>Team</h1></Link>                      
            
          </div>
          
        </div>
        <div className='flex md:hidden w-1/3 gap-10 items-center justify-end flex-row  '>
        <div className='flex gap-3'>
                
                <img src={naac} className='h-[15vh] sm:h-[15vh] pr-4 x object-contain' alt="" />                
        </div> 
          
        </div>
        {/* For Responsive Devices */}
        <div className='flex md:flex lg:hidden 2xl:hidden gap-10 items-center justify-center flex-row  '>
          <Dropdown
            menu={{
              items,
              onClick,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <FaBars className='text-white' />
              </Space>
            </a>
          </Dropdown>
        </div>
          
      </div>
      
    </div>
  )
}

export default Navbar
