import React from 'react'
import ReactDOM from 'react-dom'
import { cleanup } from '@testing-library/react'
import { Membership } from 'containers/MembershipContainer'

afterEach(cleanup)

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Membership members={[]} fetchMembers={() => {}} membersError="" />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
