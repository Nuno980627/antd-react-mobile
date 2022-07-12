import React, { useState } from 'react'
import AppRoute from '@/router/index'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  )
}

export default App
