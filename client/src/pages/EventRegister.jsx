import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { eventContext } from '../context/Context'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button, Checkbox, ConfigProvider, Form, Input, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { HOST } from '../App';
import Logo from '../assets/Logo.png'


const EventRegister = () => {
    const navigate = useNavigate()
    const { UserSelectedEvent } = useContext(eventContext);


    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [Data, setData] = useState({
        fullName: "",
        teamName: "",
        email: "",
        contactNo: "",
        contactNo2: "",
        institute: "",
        year: "",
        level: "",        
        teamLeader: "",
        members: "",
        ug_pg: "",        
        domain: "",
        member : [],
        stream: "",
        events : UserSelectedEvent.title
    });

    // console.log(Data)
    
    const changeHandler = (name, value) => {
        setData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleChange = (index, e) => {
        const updatedMembers = [...Data.member]
        updatedMembers[index] = e.target.value;
        setData({ ...Data, member: updatedMembers });
    }


    const handleCheckOut = async() =>{
         
    
    
        try {
            const { data: { key } } = await axios.get(`${HOST}/api/getkey`)

        const { data: { order } } = await axios.post(`${HOST}/api/payment/checkout`, {
            amount: UserSelectedEvent.price
        });

        const options = {
            key: key, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Cyberia2024",
            description: "Test Transaction",
            image: { Logo },
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1           
            prefill: {
                name: Data.fullName,
                email: Data.email,
                contact: Data.contactNo
            },            
            notes: {
                "address": "Razorpay Corporate Office"
            },
            handler : 
            async function (response) {                    
                  try {
                    const res =  await axios.post(`${HOST}/api/payment/paymentVerification`,{
                        ...response
                    });
                    console.log(res)
                    if(res.status === 204){
                        const res =  await axios.post(`${HOST}/api/user/registerTeamUser`,{
                            ...Data,qrString:response.razorpay_signature
                        })
                        console.log(res)
                        if(res.status === 201 ){
                            alert("success")
                        }
                        
                    }
                    else{
                        alert("failed")
                    }                
                  } catch (error) {
                    console.log(error)
                  } 
                }
            ,
            theme: {
                "color": "#3399cc"
            }
        };

        var razor = new window.Razorpay(options);
        razor.open();
       
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className='w-full h-full'>
            <div style={{backgroundImage : `url(${UserSelectedEvent.image})`}} className={`z-1000  w-full h-full bg-blend-multiply bg-[#0000006d] bg-fixed bg-no-repeat bg-cover`}>
                <div className="flex flex-row  h-full   w-full  ">
                    <div className="flex my-32 lg:my-44 md:mx-5 sm:gap-10 mx-20 sm:h-full  h-[90vh] rounded-xl md:p-5 w-full backdrop-blur-lg bg-[#0000004c]">
                        <div className="flex sm:gap-10 flex-row md:p-0 p-10 md:flex-col w-full h-full ">
                            <div className="flex w-1/2 md:gap-3 md:w-full md:p-0 h-full justify-center flex-col  md:h-full gap-10 items-center text-md text-white px-10 py-0 text-center">
                                <h1 className='text-3xl md:text-xl border-b-2 text-yellow-50'>{UserSelectedEvent.title}</h1>
                                <h1 className='text-[14px]  md:text-[10px] font-thin sm:text-white text-yellow-50'>{UserSelectedEvent.modalDescription}</h1>
                            </div>
                            <div className="flex w-1/2 md:w-full md:p-0 h-full justify-center flex-col  md:gap-0 md:h-full gap-10 items-center text-md text-white px-10 py-0 text-center">
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Form: {
                                                labelColor: "white",
                                                labelColonMarginInlineEnd: "100px"

                                            },
                                            Input: {
                                                activeBg: "transparent"
                                            },
                                            Select: {
                                                colorTextPlaceholder: "white",
                                                colorBgContainer: "transparent",
                                                colorBgElevated: "transparent",
                                                colorBgTextHover: "white",
                                                colorText: "white",


                                            }
                                        }
                                    }}>
                                    <Form

                                        name="basic"
                                        labelCol={{
                                            span: 8,
                                        }}
                                        wrapperCol={{
                                            span: 16,
                                        }}
                                        style={{
                                            maxWidth: 600,
                                        }}
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        autoComplete="on"
                                        className='h-full overflow-auto border-[1px] shadow-yellow-50 shadow-md border-white p-10 rounded-2xl'
                                    >
                                        <Form.Item

                                            label="Team Name"

                                            className='w-full'

                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Enter Team Name!',
                                                },
                                            ]}

                                        >
                                            <Input name="teamName" placeholder='Name of the Team' onChange={(e) => changeHandler(e.target.name, e.target.value)} value={Data.teamName} className='bg-transparent placeholder:text-gray-300 hover:bg-transparent active:bg-transparent focus:bg-transparent text-white' />
                                        </Form.Item>

                                        <Form.Item
                                            label="Email"

                                            type="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter Email!',
                                                },
                                            ]}
                                        >
                                            <Input name='email' placeholder='Email of the Team Leader' onChange={(e) => changeHandler(e.target.name, e.target.value)} value={Data.email} className='bg-transparent placeholder:text-gray-300 hover:bg-transparent active:bg-transparent focus:bg-transparent text-white' />
                                        </Form.Item>

                                        <Form.Item
                                            label="Team Leader"

                                            type="text"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter Team Leader Name!',
                                                },
                                            ]}
                                        >
                                            <Input name='teamLeader' placeholder='Name of Team Leader' onChange={(e) => changeHandler(e.target.name, e.target.value)} value={Data.teamLeader} className='bg-transparent placeholder:text-gray-300 hover:bg-transparent active:bg-transparent focus:bg-transparent text-white' />
                                        </Form.Item>

                                        <Form.Item
                                            label="Contact"

                                            type="Number"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter Email!',
                                                },
                                            ]}
                                        >
                                            <Input name='contactNo'  type='Number'  placeholder='Contact No. of Leader' onChange={(e) => changeHandler(e.target.name, e.target.value)} value={Data.contactNo} className='bg-transparent placeholder:text-gray-300 hover:bg-transparent active:bg-transparent focus:bg-transparent text-white' />
                                        </Form.Item>

                                        <Form.Item
                                            label="Contact 2"

                                            type="Number"
                                            rules={[
                                                {
                                                    message: 'Please enter Email!',
                                                },
                                            ]}
                                        >
                                            <Input name='contactNo2' type='Number'  placeholder='Contact No. of Member' onChange={(e) => changeHandler(e.target.name, e.target.value)} value={Data.contactNo2} className='bg-transparent placeholder:text-gray-300 hover:bg-transparent active:bg-transparent focus:bg-transparent text-white' />
                                        </Form.Item>

                                        <Form.Item
                                            label="Institute"

                                            type="Number"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter Institute!',
                                                },
                                            ]}
                                        >
                                            <Input name='institute' placeholder='Name of Institue or University' onChange={(e) => changeHandler(e.target.name, e.target.value)} value={Data.institute} className='bg-transparent placeholder:text-gray-300 hover:bg-transparent active:bg-transparent focus:bg-transparent text-white' />
                                        </Form.Item>



                                        <Form.Item
                                            label="Members"
                                            type="text"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please No. of Members!',
                                                },
                                            ]}
                                        >
                                            <Select className='placeholder:text-white ' placeholder="No. of Members" name="members" value={Data.members} onChange={(value) => changeHandler('members', value)}>
                                                <Select.Option className=' text-gray-400 hover:bg-white text-[10px]' value="" disabled >No. of Team Members</Select.Option>
                                                <Select.Option value={1}>1</Select.Option>
                                                <Select.Option value={2}>2</Select.Option>
                                                <Select.Option value={3}>3</Select.Option>
                                                <Select.Option value={4}>4</Select.Option>
                                            </Select>
                                            <div className='w-1/2 text-white'>
                                            </div>
                                        </Form.Item>

                                        {
                                            Array.from({ length: Data.members - 1 }).map((_, index) => {
                                                return <Form.Item
                                                    label={`Member ${index + 1}`}
                                                    key={index}
                                                    type="text"

                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please enter Team Members Name!',
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder="Name of Member" name={`member${index}`} onChange={(e) => handleChange(index, e)}
                                                        value={Data.member[index] || ""} className='bg-transparent placeholder:text-gray-300 hover:bg-transparent active:bg-transparent focus:bg-transparent text-white' />
                                                </Form.Item>
                                            })
                                        }


                                        <Form.Item
                                            label="Level"
                                            type="text"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please Enter School Or College!',
                                                },
                                            ]}
                                        >
                                            <Select className='placeholder:text-white ' placeholder="Select a Level" name="level" value={Data.level} onChange={(value) => changeHandler('level', value)}>
                                                <Select.Option className=' text-gray-200 hover:bg-white text-xs' value="" disabled >Select Level</Select.Option>
                                                <Select.Option value="school">School</Select.Option>
                                                <Select.Option value="college">College</Select.Option>
                                            </Select>
                                        </Form.Item>

                                        <Form.Item
                                            label="Year"
                                            type="text"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please Select Year',
                                                },
                                            ]}
                                        >

                                            {Data.level === "college" ?
                                                (
                                                    <Select name='year' value={Data.year} onChange={(value) => changeHandler('year', value)} type="text" placeholder='Level' >
                                                        <Select.Option className=' text-gray-300 hover:bg-white text-xs' value="" disabled >Select an Year</Select.Option>
                                                        <Select.Option className=' text-gray-400 focus:bg-transparent' value="1st year" >1st Year</Select.Option>
                                                        <Select.Option className=' text-gray-400 focus:bg-transparent' value="2nd year" >2nd Year</Select.Option>
                                                        <Select.Option className=' text-gray-400 focus:bg-transparent' value="3rd year" >3rd Year</Select.Option>
                                                        <Select.Option className=' text-gray-400 focus:bg-transparent' value="4th year" >4th Year</Select.Option>
                                                    </Select>) :
                                                <Select name='year' value={Data.year} onChange={(value) => changeHandler('year', value)} type="text" placeholder='Level'>
                                                    <Select.Option className=' text-gray-300 hover:bg-white text-xs' value="" disabled >Select Standard</Select.Option>
                                                    <Select.Option className=' text-gray-400 focus:bg-transparent' value="11th" >11th std</Select.Option>
                                                    <Select.Option className=' text-gray-400 focus:bg-transparent' value="12th" >12th std</Select.Option>
                                                </Select>}
                                            <div className='w-1/2 text-white'>
                                            </div>
                                        </Form.Item>

                                        {
                                            Data.level === "college" ?
                                                <div>
                                                    <Form.Item
                                                        label="UG/PG"
                                                        type="text"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Please Enter UG Or PG!',
                                                            },
                                                        ]}
                                                    >
                                                        <Select className='placeholder:text-white ' placeholder="Select a Level" name="ug_pg" value={Data.ug_pg} onChange={(value) => changeHandler('ug_pg', value)}>
                                                            <Select.Option className=' text-gray-200 hover:bg-white text-xs' value="" disabled >Select Level</Select.Option>
                                                            <Select.Option value="ug">Under Graduated</Select.Option>
                                                            <Select.Option value="pg">Post Graduated</Select.Option>
                                                        </Select>
                                                    </Form.Item>
                                                    <Form.Item
                                                        label="Stream"
                                                        type="text"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Please Enter Stream!',
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder="Stream" name="stream" onChange={(e) => changeHandler(e.target.name, e.target.value)}
                                                            value={Data.stream} className='bg-transparent placeholder:text-gray-300 hover:bg-transparent active:bg-transparent focus:bg-transparent text-white' />
                                                    </Form.Item>
                                                </div>
                                                :
                                                <Form.Item
                                                    label="Stream"
                                                    type="text"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please Enter School Stream!',
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder="Name of stream" name="stream" onChange={(e) => changeHandler(e.target.name, e.target.value)}
                                                        value={Data.stream} className='bg-transparent placeholder:text-gray-300 hover:bg-transparent active:bg-transparent focus:bg-transparent text-white' />
                                                </Form.Item>
                                        }

                                        {UserSelectedEvent.title === "Hackathon" ?
                                            <Form.Item
                                                label="Domain"
                                                type="text"
                                                rules={[
                                                    {
                                                        message: 'Please Enter Interested Domain!',
                                                    },
                                                ]}
                                            >
                                                <Select className='placeholder:text-white ' placeholder="Interested Domain" name="domain" value={Data.domain} onChange={(value) => changeHandler('domain', value)}>
                                                    <Select.Option className=' text-gray-200 hover:bg-white text-xs' value="" disabled >Select Domain</Select.Option>
                                                    <Select.Option value="ai">Ai</Select.Option>
                                                    <Select.Option value="iot">Iot</Select.Option>
                                                    <Select.Option value="sustainable">Sustainable</Select.Option>
                                                    <Select.Option value="blockchain">Blockchain</Select.Option>
                                                    <Select.Option value="cybersecurity">Cybersecurity</Select.Option>
                                                </Select>
                                            </Form.Item> : ""
                                        }
                                        

                                        

                                        <Form.Item
                                            wrapperCol={{
                                                offset: 30,
                                                span: 30,
                                            }}
                                        >
                                            <Button onClick={handleCheckOut}   className='bg-transparent text-white border-white active:bg-white target:bg-white hover:bg-white' >
                                                Submit
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </ConfigProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EventRegister
