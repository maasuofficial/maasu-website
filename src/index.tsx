import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { Routes } from './routes/routes'
import { ThemeProvider } from './components'
import theme from './_theme'
import './css/app.scss'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
