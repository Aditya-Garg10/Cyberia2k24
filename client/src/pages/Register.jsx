import React, { useContext, useState } from 'react'
import Logo from '../assets/Logo.png'
import { Input, Button, Form, Select } from 'antd'
import Title from 'antd/es/skeleton/Title';
import { eventContext } from '../context/Context';
import axios from 'axios'
import { HOST } from '../App'

import { RxCross1 } from "react-icons/rx";

const Register = () => {

    const [modalTitle, setmodalTitle] = useState("");
    const [userSelectedEvents, setuserSelectedEvents] = useState([]);
    const [totalPrice, settotalPrice] = useState(0);



    const { events } = useContext(eventContext);

    const options = [];
    events.map((event, i) => {
        options.push({
            label: event.title,
            value: event.title,
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



    const calculateTotalPrice = () => {
        // console.log(userSelectedEvents)
        const selectedEvents = events.filter((event) =>
            userSelectedEvents.includes(event.title)
        );
        console.log("selected events", selectedEvents.title);
        const total = selectedEvents.reduce((sum, event) => sum + event.price, 0);
        console.log("total Price", total);
        settotalPrice(total)
    }

    const handleChange = (e) => {
        setuserSelectedEvents(e)
        //  setuserSelectedEvents((prev)=>{
        //     if(prev.includes(e)){
        //         return prev.filter((n)=> n !== e);
        //     }
        //     else{
        //         return [...prev,e]
        //     }
        //  })

    }






    // const totalPrice =userSelectedEvents.reduce((total,product)=>total + product.price,0)

    const handleSubmit = async () => {
        console.log({ ...Data, modalTitle });
        setModalOpen(false)

    }




    const checkOutHandler = async () => {
        calculateTotalPrice()

        const { data: { key } } = await axios.get(`${HOST}/api/getkey`)

        const { data: { order } } = await axios.post(`${HOST}/api/payment/checkout`, {
            amount: totalPrice
        });

        const options = {
            key: key, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Cyberia2024",
            description: "Test Transaction",
            image: { Logo },
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: `${HOST}/api/payment/paymentVerification`,
            prefill: {
                name: Data.fullName,
                email: Data.email,
                contact: Data.contactNo
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        };

        var razor = new window.Razorpay(options);
        razor.open();
       

        // console.log(data)
    }
    return (
        <div className={`text-8xl w-full sm:bg-contain sm:bg-repeat bg-[#00000097] bg-blend-multiply  h-full bg-[url("./assets/registeration.jpg")] bg-no-repeat bg-cover `}>
            <div className="flex  justify-center items-center py-24 px-10 w-full h-full ">
                <div className="flex flex-row  md:flex-col w-4/5 h-[80vh] my-[50px] rounded-2xl shadow-2xl  shadow-slate-800  backdrop-blur-sm bg-[#000000a7]">
                    <div className="flex flex-col justify-center items-center w-1/2 md:w-full md:h-full  m-5">
                        <h1 className='text-white text-center text-wrap text-5xl flex flex-col gap-5'>Register for an <span className='text-6xl text-purple-800  '>Events</span></h1>


                        <div className='w-[20vw]'>
                            <Select
                                mode="multiple"
                                allowClear
                                className='w-full placeholder:text-gray-900 bg-white outline-none shadow-md shadow-purple-500 rounded-md'
                                placeholder="Please select"
                                onChange={(e) => handleChange(e)}
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
                            <button type='submit' onClick={() => checkOutHandler()} className='text-black text-sm font-semibold shadow-lg shadow-green-600 bg-white px-3 py-1 rounded-md '>Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register
