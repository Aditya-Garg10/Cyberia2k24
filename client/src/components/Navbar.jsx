import React from 'react'
import img1 from "../assets/Logo.png"
import { FaBars, FaRegUser } from "react-icons/fa";
import { Dropdown, message, Space } from 'antd';
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};


const Navbar = () => {
  const items = [
    {
      label: '1st menu item',
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
      <div className="flex justify-between px-10 absolute top-0 z-10 flex-row bg-[#0000008f] w-full h-[10vh]">
        <div className="flex gap-0 w-full justify-start items-center">
          <img src={img1} className='object-contain md:mx-0 mx-10 h-[50px] w-[50px]' alt="" />
        </div>
        <div className='flex md:hidden gap-10 items-center justify-center flex-row  '>
          <div className="flex  flex-row w-full  gap-6 justify-evenly font-mono  items-center">
            <h1 className='text-white hover:cursor-pointer  border-red-900 text-sm hover:border-b-2 justify-center my-2 flex items-center hover:bg-[#ffffff08]  p-2 hover:transition-all '>Events</h1>
            <h1 className='text-white hover:cursor-pointer border-red-900  text-sm hover:border-b-2 justify-center my-2 flex items-center hover:bg-[#ffffff08]  p-2 hover:transition-all '>About</h1>
            <h1 className='text-white hover:cursor-pointer border-red-900 text-sm hover:border-b-2 justify-center my-2 flex items-center hover:bg-[#ffffff08]  p-2 hover:transition-all '>Team</h1>
            <h1 className='text-white hover:cursor-pointer border-red-900 hover:text-[18px] hover:text-red-800 text-sm hover:border-b-2 justify-center my-2 flex items-center hover:bg-[#ffffff08]  p-2 hover:transition-all '>REGISTER</h1>
            
              <Dropdown
                menu={{
                  items,
                  onClick,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                  <div className='hover:bg-[#ffffff08]  justify-center flex items-center  p-3 w-full'><FaRegUser className='text-white  hover:text-red-600 transition-all duration-100 text-lg hover:cursor-pointer' />
                  </div>
                  </Space>
                </a>
              </Dropdown>
            
          </div>
        </div>
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
