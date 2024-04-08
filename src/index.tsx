import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'store/store'
import { Routes } from 'routes/routes'
import 'css/styles.scss'
import * as serviceWorker from './serviceWorker'
import './iconLibrary'

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
