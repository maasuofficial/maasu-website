import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { Newsletters } from 'containers/NewslettersContainer'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Router>
        <Newsletters
          fetchNewsletters={() => {}}
          isFetchingNewsletters={false}
          newsletters={[]}
          newslettersError=""
          default
        />
      </Router>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
