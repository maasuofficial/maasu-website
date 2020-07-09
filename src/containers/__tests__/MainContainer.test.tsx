import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from '../MainContainer'
import 'constants/iconLibrary'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Main fetchAllSheets={() => {}} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
