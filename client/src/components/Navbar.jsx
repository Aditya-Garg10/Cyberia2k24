import React from 'react'
import img1 from "../assets/Logo.png"
import { FaBars, FaRegUser } from "react-icons/fa";
import { Dropdown, message, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
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
      <div className="flex justify-between px-10 absolute backdrop-blur-sm flex-row  bg-[#00000054] w-full h-[12vh]">
        <div className="flex  gap-0 w-full justify-start items-center">
          <Link to="/"><img src={img1} className='object-contain   md:mx-0  mx-5 h-[52px] ' alt="" />                   </Link>
        </div>
        <div className='flex md:hidden gap-10 items-center justify-center flex-row  '>
          <div className="flex  flex-row w-full  gap-6 justify-evenly font-mono  items-center">
          <button onClick={()=>navigate("/event")}><h1 className='text-white hover:cursor-pointer  border-red-900 text-sm hover:border-b-2 justify-center my-2 flex items-center hover:bg-[#ffffff08]  p-2 hover:transition-all '>Events</h1></button>
          <Link to="/about"><h1 className='text-white hover:cursor-pointer border-red-900  text-sm hover:border-b-2 justify-center my-2 flex items-center hover:bg-[#ffffff08]  p-2 hover:transition-all '>About</h1></Link>
          <Link to="/team"><h1 className='text-white hover:cursor-pointer border-red-900 text-sm hover:border-b-2 justify-center my-2 flex items-center hover:bg-[#ffffff08]  p-2 hover:transition-all '>Team</h1></Link>                      
            
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
