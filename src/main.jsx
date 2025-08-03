import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import './index1.css'
import {GlobalProvider} from './context/GlobalContext'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalProvider>
  <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </GlobalProvider>
)
