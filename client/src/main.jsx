import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import EventsContextProvider from './context/Context.jsx';

createRoot(document.getElementById('root')).render(  
   
  <EventsContextProvider>
  <App />
  </EventsContextProvider>
  
)
