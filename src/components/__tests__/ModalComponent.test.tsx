import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'store/store'
import { ModalComponent } from '../ModalComponent'

describe('ModalComponent', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <ModalComponent>
          <span></span>
        </ModalComponent>
      </Provider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
