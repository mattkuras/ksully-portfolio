import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/app'
import './index.css'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.body.appendChild(document.createElement('div')),
  )
})
