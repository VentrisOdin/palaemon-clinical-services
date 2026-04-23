import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'  // 👈 ADD THIS
import App from './App.jsx'
import './styles/variables.css'
import './styles/global.css'
import './styles/animations.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
      <Analytics /> {/* 👈 ADD THIS */}
    </HelmetProvider>
  </React.StrictMode>,
)