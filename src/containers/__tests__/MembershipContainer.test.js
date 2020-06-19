import React from 'react'
import ReactDOM from 'react-dom'
import { cleanup } from '@testing-library/react'
import { MembershipContainer } from 'containers/MembershipContainer'

afterEach(cleanup)

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MembershipContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
