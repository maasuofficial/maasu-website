import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HeaderComponent } from '../HeaderComponent'
import { store } from 'store/store'
import 'constants/iconLibrary'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <HeaderComponent />
      </Provider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
