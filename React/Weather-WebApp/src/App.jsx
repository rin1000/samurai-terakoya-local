import { useState } from 'react'
import axios from 'axios';

function App() {
  const BaseURL = "https://api.open-meteo.com/v1/forecast?"
  
  const LocationList = [
    {Name: '東京', lat: 35.689, lon: 139.692}
  ]
  const LocationURL = "latitude${lat}&longitude=${lon}&"
  return (
    <>
      
    </>
  )
}

export default App
