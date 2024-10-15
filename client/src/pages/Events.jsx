import React, { useContext, useEffect, useState } from 'react'
import naac from "../assets/Cyb.jpg"
import Cards from '../components/Cards'
import axios from "axios"
import { eventContext } from '../context/Context'

const Events = () => {
  
  
  const { events,setEvents } = useContext(eventContext)

  useEffect(()=>{
    
    getEventsData()
  
      
},[])

  const getEventsData = async() =>{
    try {
      const response = await axios.get("http://localhost:8000/api/events/getAllEvents");
      // console.log(response);
      setEvents(response.data)
      localStorage.setItem("eventsData",events);
      console.log(events);
    } catch (error) {
      
    }
  }


  
  

  return (
    <div className='h-full  w-full  '>
    <div className=' w-full h-full sm:bg-contain sm:bg-repeat bg-[#00000097] bg-blend-multiply   bg-[url("./assets/eventsbg.jpg")] bg-repeat bg-cover '>
    <div className={`text-8xl w-full h-full`}>
      <div className="flex  justify-start items-start py-28 px-10 w-full  ">
          <div className={`grid grid-cols-3  place-items-center  md:grid-cols-2 sm:grid-cols-1 justify-center my-10 gap-5 w-full `}>
            {
              events && events.map((event,i)=>{
                return <div className='h-[40vh] sm:h-[20vh] w-200'> <Cards key={i} image={event.image} modalDescription={event.modalDescription} title={event.title} description={event.description} RuleBook={event.RuleBook} tag={event.tag} /> </div>        
              }) 
            }

          </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Events
