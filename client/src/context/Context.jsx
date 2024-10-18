import React, { createContext,useState } from 'react'




export const eventContext = createContext(null);




const EventsContextProvider = (props) =>{
    const [events, setEvents] = useState([]);
    const [UserSelectedEvent, setUserSelectedEvent] = useState(JSON.parse(localStorage.getItem('UserSelectedEvent'))||[]);
   
    
   
    const contextValue = {events,setEvents,UserSelectedEvent, setUserSelectedEvent}
    
    return(
        <eventContext.Provider value={contextValue}>
            {props.children}
        </eventContext.Provider>
    )
}

export default EventsContextProvider;