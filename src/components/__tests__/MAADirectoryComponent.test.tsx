import React from 'react'
import ReactDOM from 'react-dom'
import { MAADirectoryComponent } from '../MAADirectoryComponent'
import { User } from 'containers/MAAContainer'

const user: User = {
  id: 'uuid12345uuid123',
}

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MAADirectoryComponent user={user} rootUrl={'/'} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
