import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Components/Home'
import Headers from './Components/Headers'
import Footer from "./Components/Footer"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Headers />
    <Home />
    <Footer />
  </React.StrictMode>,
)
