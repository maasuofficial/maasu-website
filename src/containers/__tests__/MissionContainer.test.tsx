import React from 'react'
import ReactDOM from 'react-dom'
import { cleanup } from '@testing-library/react'
import { MissionContainer } from 'containers/MissionContainer'

afterEach(cleanup)

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MissionContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
