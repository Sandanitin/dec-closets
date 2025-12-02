import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.css'
import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
emailjs.init("jHIrioW2Kw2BvhV2i")

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)