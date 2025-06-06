import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MuiTest } from './pages/MuiTest.jsx'
import { ApiTest } from '../test/apiTest.jsx'
import { LocalStorageTest } from '../test/localStorage.jsx'
import { BrowserRouter } from "react-router-dom"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
      {/* <MuiTest />
      <ApiTest />
      <LocalStorageTest/> */}
  </StrictMode>
)
