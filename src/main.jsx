import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import Card from './card/card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card/>
  </StrictMode>,
)
