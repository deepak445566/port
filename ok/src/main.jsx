import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Door from './components/common/Door.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 
  <StrictMode>
     <Door>
    <App />
      </Door>
  </StrictMode>

  </BrowserRouter>
)
