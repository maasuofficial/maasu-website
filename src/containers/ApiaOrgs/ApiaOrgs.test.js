import React from 'react'
import ReactDOM from 'react-dom'
import ApiaOrgs from './'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ApiaOrgs />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
