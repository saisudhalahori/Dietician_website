import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './Contextapi/AuthContext.jsx'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(

 
  
<Auth0Provider
    domain="dev-vrkq3kx21nueo6wx.us.auth0.com"
    clientId="gEC4DeZLmGysT0p3DJnP4nPt7YcifOBb"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </Auth0Provider>
 
)
