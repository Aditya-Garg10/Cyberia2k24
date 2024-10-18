import React, { useContext, useEffect, useState } from 'react'
import naac from "../assets/Cyb.jpg"
import Cards from '../components/cards/Cards'
import axios from "axios"
import { eventContext } from '../context/Context'
import TeamCards from '../components/cards/TeamCards'


const Events = () => {


  const { events } = useContext(eventContext)



  return (
    <div className='h-full  w-full  '>
      <div className='z-1000 bg-[url("./assets/eventsbg.jpg")] h-full bg-blend-multiply bg-[#00000095] bg-fixed bg-no-repeat bg-cover'>
        <div className={`text-8xl w-full h-full`}>
          <div className="flex  flex-col justify-center items-center py-32 px-10 w-full  ">
              
            <div className={`flex flex-col items-center  gap-20 h-full  md:grid-cols-2 sm:grid-cols-1 justify-center my-10  w-full `}>
              <h1 className='text-white text-4xl border-b-2'>Solo Events</h1>
              <div className='grid grid-cols-3 sm:h-full sm:grid-cols-1 md:grid-cols-2'>
              {
                events && events.map((event, i) => {
                  if(event.category === "solo"){
                    return <div className='  h-full grid grid-cols-3 gap-10 w-full'>
                    <Cards key={i} image={event.image} price={event.price}  modalDescription={event.modalDescription} title={event.title} description={event.description} RuleBook={event.RuleBook} tag={event.tag} />                                        
                  </div>
                  }
                  else{
                   return ""
                  }                 
                })
              }
              </div>
              <h1 className='text-white text-4xl border-b-2'>Team Events</h1>
              <div className='grid grid-cols-3 gap-10  sm:h-full sm:grid-cols-1 md:grid-cols-2'>
              {
                events && events.map((event, i) => {
                  if(event.category === "team"){
                    return <div className='sm:full md:grid-cols-2 sm:grid-cols-1 h-full grid lg:grid-cols-3 gap-10 w-full'>
                    <TeamCards key={i} image={event.image} price={event.price}  modalDescription={event.modalDescription} title={event.title} description={event.description} RuleBook={event.RuleBook} tag={event.tag} />                    
                  </div>
                  }
                  else{
                   return ""
                  }                 
                })
              }
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
