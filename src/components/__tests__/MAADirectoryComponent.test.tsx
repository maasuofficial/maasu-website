import React from 'react'
import ReactDOM from 'react-dom'
import { MAADirectoryComponent } from '../MAADirectoryComponent'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MAADirectoryComponent />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
