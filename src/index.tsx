import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'store/store'
import { ThemeProvider } from './components'
import theme from './_theme'
import { Routes } from './routes/routes'
import './css/styles.scss'
import * as serviceWorker from './serviceWorker'
import 'constants/iconLibrary'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
