import React from 'react'
import ReactDOM from 'react-dom'
import { Board } from '../BoardContainer'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Board
        fetchBoard={() => {}}
        isFetchingBoard={false}
        board={[]}
        boardError=""
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
