import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { Hxstory } from '../HxstoryContainer'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Router>
        <Hxstory
          fetchEvents={() => {}}
          isFetchingEvents={false}
          events={[]}
          eventsError=""
          default
        />
      </Router>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
