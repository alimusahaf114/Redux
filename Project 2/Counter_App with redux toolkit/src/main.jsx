import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Provider } from "react-redux"
import counterStore from './store/index.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={counterStore}>
      <App />
    </Provider>
  </StrictMode>,
)
