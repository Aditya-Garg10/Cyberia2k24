import React, { useContext, useState } from 'react'
import Logo from '../assets/Logo.png'
import { Input, Button, Form, Select } from 'antd'
import Title from 'antd/es/skeleton/Title';
import { eventContext } from '../context/Context';

import { RxCross1 } from "react-icons/rx";

const Register = () => {

    
   

    const [modalTitle, setmodalTitle] = useState("");
    const [userSelectedEvents, setuserSelectedEvents] = useState([]);

    const { events } = useContext(eventContext);

    const options = [];
    events.map((event,i)=>{
        options.push({
            label : event.title,
            value : event.title
        })
    })
    const [Data, setData] = useState({
        fullName: "",
        email: "",
        contactNo: "",
        contactNo2: "",
        institute: "",
        level: "",
        
    });

    const changeHandler = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value })
    }

    
const handleChange = (e) => {
  setuserSelectedEvents(e)
  console.log({...userSelectedEvents})
};



    const handleSubmit = async () => {
        console.log({ ...Data, modalTitle });
        setModalOpen(false)
    }

    const handleEventOnClick = (e) => {
        e.disabled
        setuserSelectedEvents([...userSelectedEvents, e]);

    }
    return (
        <div className={`text-8xl w-full sm:bg-contain sm:bg-repeat bg-[#00000097] bg-blend-multiply  h-full bg-[url("./assets/registeration.jpg")] bg-no-repeat bg-cover `}>
            <div className="flex  justify-center items-center py-24 px-10 w-full h-full ">
                <div className="flex flex-row  md:flex-col w-4/5 h-[80vh] my-[50px] rounded-2xl shadow-2xl  shadow-slate-800  backdrop-blur-sm bg-[#000000a7]">
                    <div className="flex flex-col justify-center items-center w-1/2 md:w-full md:h-full  m-5">
                        <h1 className='text-white text-center text-wrap text-5xl flex flex-col gap-5'>Register for an <span className='text-6xl text-purple-800  '>Events</span></h1>


                       <div className='w-[20vw]'> <Select
                            mode="multiple"
                            allowClear
                            className='w-full placeholder:text-gray-900 bg-white outline-none shadow-md shadow-purple-500 rounded-md'
                            placeholder="Please select"                            
                            onChange={(e)=>handleChange(e)}
                            options={options}

                        /></div>                        
                    </div>
                    <div className="flex justify-center items-center md:w-full w-1/2  m-5">
                        <form className='w-4/5 gap-3 p-5  rounded-xl shadow-2xl h-full flex-col flex justify-center items-center' >


                            <Input value={Data.fullName} name='fullName' allowClear onChange={changeHandler} required type="text" className='outline-none w-full  shadow-inner shadow-slate-900  rounded-lg border-2 border-gray-400 px-3 py-1 placeholder:text-gray-400 text-black' placeholder='Full Name' />

                            <Input value={Data.email} name='email' allowClear onChange={changeHandler} required type="email" className='outline-none  shadow-inner shadow-slate-900 w-full  px-3 py-1 rounded-lg border-2 border-gray-400   placeholder:text-gray-400 text-black' placeholder='Email' />
                            <Input value={Data.contactNo} title="Enter a Valid Contact Number" allowClear name='contactNo' onChange={changeHandler} minLength="10" type="number" className='outline-none shadow-inner shadow-slate-900 w-full px-3 py-1 rounded-lg border-2 border-gray-400 placeholder:text-gray-400 text-black' placeholder='Contact Number' />
                            <Input value={Data.contactNo2} name='contactNo2' onChange={changeHandler} allowClear maxLength="10" type="number" className='outline-none  w-full px-3 py-1 rounded-lg shadow-inner shadow-slate-900 border-2 border-gray-400 placeholder:text-gray-400 text-black' placeholder='Contact Number 2 (optional)' />
                            <Input value={Data.institute} name='institute' onChange={changeHandler} allowClear type="text" className='outline-none  w-full px-3 py-1 rounded-lg border-2 border-gray-400 shadow-inner shadow-slate-900 placeholder:text-gray-400 text-black' placeholder='Institute' />
                            <select name='level' value={Data.level} onChange={changeHandler} allowClear type="text" className='outline-none text-sm  w-full px-3 py-1 rounded-lg border-2 border-gray-400 shadow-inner shadow-slate-900 placeholder:text-gray-400 text-black' placeholder='Level' >
                                <option value="" disabled >Select an Option</option>
                                <option value="college" >College</option>
                                <option value="school">School</option>
                            </select>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register
