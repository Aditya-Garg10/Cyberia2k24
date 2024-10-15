import React, { createContext,useState } from 'react'




export const eventContext = createContext(null);




const EventsContextProvider = (props) =>{
    const [events, setEvents] = useState([]);
   
    
   
    const contextValue = {events,setEvents}
    
    return(
        <eventContext.Provider value={contextValue}>
            {props.children}
        </eventContext.Provider>
    )
}

export default EventsContextProvider;