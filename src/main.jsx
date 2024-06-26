import React from 'react'
import ReactDOM from 'react-dom/client'

import { Router } from './Router.jsx'


import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router></Router>
  </React.StrictMode>,
)
