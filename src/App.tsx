import React, { useState } from 'react'
import AppRoute from '@/router/index'
import { BrowserRouter } from 'react-router-dom'
import { HoxRoot } from 'hox'

function App() {
  return (
    <BrowserRouter>
      <HoxRoot>
        <AppRoute />
      </HoxRoot>
    </BrowserRouter>
  )
}

export default App
