import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

createRoot(document.getElementById('root')).render(  
    <Auth0Provider
    domain="dev-4zj77hwnlqp28w0c.us.auth0.com"
    clientId="HvAHG0BpF4bYDymrPglI9M6WO65PNEZ1"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
  </Auth0Provider>  
)
