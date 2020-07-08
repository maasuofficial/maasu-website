import React from 'react'
import ReactDOM from 'react-dom'
import { DropdownMenu } from '../DropdownMenu'

const menu = {
  test: 'link',
}

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DropdownMenu menu={menu} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
