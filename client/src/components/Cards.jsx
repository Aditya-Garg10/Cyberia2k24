import React, { useState } from 'react'
import { Button, Card, ConfigProvider, Input, Skeleton, Spin } from 'antd';
import { Modal } from 'antd';
import {FaUser,FaMailchimp, FaMobile, FaMobileScreen} from 'react-icons/fa6'
import {Link} from 'react-router-dom'


const Cards = (props) => {
   const theme = {
    token:{
        contentBg : "",
        colorBgElevated : "#000000cc",
        colorText : "white",
        colorFill : "white"
    }
   }

    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setmodalTitle] = useState("");
    const [modalDes, setmodalDes] = useState("");
    

    const [Data, setData] = useState({
        fullName : "",
        email : "",
        contactNo : "",
        contactNo2 : "",
        institute : "",
        level : "",           
    });

    const changeHandler = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value })
      }
    
    const handleOpenModal = (e) => {
        console.log(e)
        setModalOpen(true)
        setmodalTitle(e.title)
        setmodalDes(e.modalDescription)
    }

    const handleSubmit = async() =>{
        console.log({...Data,modalTitle});
        setModalOpen(false)
        

    }
    return (
        <div className='h-full'>
            {<Card
                className={`text-white  md:w-300 bg-contain  border-0 rounded-md bg-[#00000097] bg-no-repeat bg-blend-multiply  flex-wrap flex flex-col`}
                style={{
                    backgroundImage: `url(${props.image ? props.image : "./assets/Cyb.jpg"})`
                }}

            >
                { props.title ? (<div>
                    <div className='flex flex-col'>
                    <h1 className='text-3xl w-full md:text-xl flex-row items-center gap-2 flex flex-wrap  font-light text-wrap '>{props.title} <span className='text-black text-wrap rounded-sm px-2 py-[2px]  text-xs my-2 bg-white'>{props.description}</span> </h1>
                    <h1 className='text-sm md:text-xs  font-extralight'>{props.description}</h1>
                </div>

                <div className="flex gap-3  my-5 flex-row flex-wrap">
                    <Link to="/RuleBook"><p  className='px-3 py-2 md:px-2 md:text-sm md:py-1 bg-white w-fit h-fit text-black'>RuleBook</p></Link>
                    <button onClick={(e) => handleOpenModal(props)} className='px-3 py-2  md:px-2 md:py-1 md:text-sm hover:text-white  hover:bg-[#ffffff3b] bg-white transition-all    w-fit h-fit text-black'>Register</button>
                </div>
                </div>) : <div><Spin tip="Loading" size="large"/></div> }


            </Card>}           
            
                <ConfigProvider theme={theme}>
            <Modal

                title={modalTitle ? modalTitle :  <Skeleton.Input active size="default" />}
                width={1000}
                
                centered
                open={modalOpen}
                footer={[
                    <Button onClick={() => setModalOpen(false)} className='font-myFont bg-black rounded-sm' key="back">
                        Cancel
                    </Button>,
                    <Button key="submit" onClick={handleSubmit} className='bg-black text-white font-myFont rounded-sm'   >
                        Submit
                    </Button>,
                ]}                
            >
                <div className="flex flex-row md:flex-col w-full h-full ">
                    <div className="flex md:w-full w-1/2 justify-center items-center text-center p-10 h-full">
                        <p className='w-full h-full flex justify-center items-center'>{modalDes ? modalDes : <Skeleton className='w-full h-full'  size="large"  active  />}</p>
                    </div>
                    
                    <div className="flex md:w-full justify-center  items-center flex-col w-1/2 p-10 h-full">
                        <form className='w-full gap-3 p-5 rounded-xl shadow-2xl shadow-slate-800 bg-transparent backdrop-blur-sm h-full flex-col flex justify-center items-center' >
                            <label htmlFor="" className='text-lg md:text-sm text-center'>Please Fill Out the form Below</label>
                            <Input value={Data.fullName} name='fullName' onChange={changeHandler}  required type="text" className='outline-none w-2/3   rounded-lg border-2 border-gray-400 px-3 py-1 placeholder:text-gray-400 text-black'  placeholder='Full Name or Team Name' />
                            <Input value={Data.email} name='email' onChange={changeHandler}  required type="email" className='outline-none  w-2/3  px-3 py-1 rounded-lg border-2 border-gray-400   placeholder:text-gray-400 text-black'  placeholder='Email' />
                            <Input value={Data.contactNo} name='contactNo' onChange={changeHandler}  type="number" className='outline-none  w-2/3 px-3 py-1 rounded-lg border-2 border-gray-400 placeholder:text-gray-400 text-black'  placeholder='Contact Number' />
                            <Input value={Data.contactNo2} name='contactNo2' onChange={changeHandler} type="number" className='outline-none  w-2/3 px-3 py-1 rounded-lg border-2 border-gray-400 placeholder:text-gray-400 text-black'  placeholder='Contact Number 2 (optional)' />
                            <Input value={Data.institute} name='institute' onChange={changeHandler} type="text" className='outline-none  w-2/3 px-3 py-1 rounded-lg border-2 border-gray-400 placeholder:text-gray-400 text-black'  placeholder='Institute' />
                            <select name='level' value={Data.level}  onChange={changeHandler}  type="text" className='outline-none  w-2/3 px-3 py-1 rounded-lg border-2 border-gray-400 placeholder:text-gray-400 text-black'  placeholder='Level' >                                
                                <option value="" disabled >Select an Option</option>
                                <option  value="college" >College</option>
                                <option value="school">School</option>
                            </select>                            
                        </form>
                    </div>
                </div>

            </Modal>
            </ConfigProvider>
            
</div>

    )
}

export default Cards
