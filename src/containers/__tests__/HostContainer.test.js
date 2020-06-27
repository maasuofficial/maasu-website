import React from 'react'
import ReactDOM from 'react-dom'
import { Host } from '../HostContainer'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Host conferences={[]} fetchConferences={() => {}} conferencesError="" />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
