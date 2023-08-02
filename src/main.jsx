import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Headers from './Headers'
import Footer from "./Footer"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Headers />
    <Home />
    <Footer />
  </React.StrictMode>,
)
