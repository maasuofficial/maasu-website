import React from 'react'
import ReactDOM from 'react-dom'
import { cleanup } from '@testing-library/react'
import { Resources } from 'containers/ResourcesContainer'

afterEach(cleanup)

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Resources />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
