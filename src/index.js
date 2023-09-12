import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { GlobalStyle } from './style/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <App />
    <GlobalStyle />
  </>,
)

reportWebVitals()
