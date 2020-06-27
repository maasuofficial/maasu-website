import React from 'react'
import ReactDOM from 'react-dom'
import { Conferences } from '../ConferencesContainer'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Conferences
        conferences={[]}
        fetchConferences={() => {}}
        conferencesError=""
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
