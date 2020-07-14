import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { Resources } from 'containers/ResourcesContainer'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Router>
        <Resources
          fetchResources={() => {}}
          isFetchingResources={false}
          resources={[]}
          resourcesError=""
          default
        />
      </Router>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
