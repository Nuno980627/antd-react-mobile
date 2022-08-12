import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/styles/index.less'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import './locale/index'

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
