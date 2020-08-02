import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ModalMenu } from '../menu/ModalMenu'
import { store } from 'store/store'
import 'constants/iconLibrary'

const menu = {
  test: 'link',
}

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <ModalMenu menu={menu} />
      </Provider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
