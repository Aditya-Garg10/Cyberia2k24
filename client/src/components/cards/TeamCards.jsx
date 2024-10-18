import React, { useContext, useState } from 'react'
import { Button, Card, ConfigProvider, Input, Skeleton, Spin } from 'antd';
import { Modal } from 'antd';
import {FaUser,FaMailchimp, FaMobile, FaMobileScreen} from 'react-icons/fa6'
import {Link, useNavigate} from 'react-router-dom'
import { eventContext } from '../../context/Context';


const TeamCards = (props) => {
//    const theme = {
//     token:{
//         contentBg : "",
//         colorBgElevated : "#000000cc",
//         colorText : "white",
//         colorFill : "white"
//     }
//    }
 
const navigate = useNavigate()
    
    const {UserSelectedEvent,setUserSelectedEvent} = useContext(eventContext)

    const [Data, setData] = useState({
        fullName : "",
        email : "",
        contactNo : "",
        contactNo2 : "",
        institute : "",
        year : "",
        level : "",  
        age : "",
        gender : "",
        teamLeaderName : "",
        participants : ""         
    });
    
    
    const handleRedirect = (e) => {                    
        setUserSelectedEvent(e);
        localStorage.setItem("UserSelectedEvent",JSON.stringify(e));
        navigate("/register");
        
    }

   
    return (
        <div className=''>
            {<Card
                className={`text-white w-[30vw] md:w-auto bg-contain md:h-full h-[35vh] backdrop-blur-3xl  md:w-300  md:bg-contain  border-0 rounded-md bg-[#000000a1] bg-no-repeat bg-blend-multiply  flex-wrap flex flex-col`}
                style={{
                    backgroundImage: `url(${props.image ? props.image : "./assets/Cyb.jpg"})`
                }}

            >
                { props.title ? (<div>
                    <div className='flex  flex-col'>
                    <h1 className='text-2xl  w-full md:text-xl flex-row items-center gap-2 flex flex-wrap  font-light text-wrap '>{props.title} <span className='text-white shadow-sm shadow-purple-300 border-[1px] border-purple-50 text-wrap rounded-sm px-2 py-[2px]  text-xs my-2  bg-black'>{props.tag}</span> </h1>
                    <h1 className='text-sm md:text-xs  font-extralight'>{props.description}</h1>
                </div>

                <div className="flex gap-3  my-5 flex-row flex-wrap">
                    <Link to="/RuleBook"><p  className='px-3 py-2 md:px-2 md:text-sm md:py-1 bg-white w-fit h-fit text-black'>RuleBook</p></Link>
                   <button onClick={()=>handleRedirect(props)} className='px-3 py-2  md:px-2 md:py-1 md:text-sm hover:text-white  hover:bg-[#ffffff3b] bg-white transition-all    w-fit h-fit text-black'>Register</button>
                </div>
                </div>) : <div><Spin tip="Loading" size="large"/></div> }
            </Card>}           
                           
            
</div>

    )
}

export default TeamCards
