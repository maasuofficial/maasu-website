import React from 'react'
import ReactDOM from 'react-dom'
import { DonateContainer, DonateCompleteContainer } from '../DonateContainer'

describe('DonateContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DonateContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('DonateCompleteContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DonateCompleteContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
