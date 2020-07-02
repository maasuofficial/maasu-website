import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { Awards } from '../AwardsContainer'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Router>
        <Awards
          fetchAwards={() => {}}
          isFetchingAwards={false}
          awards={[]}
          awardsError=""
          default
        />
      </Router>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
