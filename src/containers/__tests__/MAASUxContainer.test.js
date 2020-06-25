import React from 'react'
import ReactDOM from 'react-dom'
import { MAASUx } from '../MAASUxContainer'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MAASUx
        conferences={[]}
        fetchConferences={() => {}}
        conferencesError=""
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
