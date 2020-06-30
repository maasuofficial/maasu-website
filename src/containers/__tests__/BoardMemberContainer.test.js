import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { BoardMember } from '../BoardMemberContainer'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Router>
        <BoardMember
          fetchBoard={() => {}}
          isFetchingBoard={false}
          board={[]}
          boardError=""
          default
        />
      </Router>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
