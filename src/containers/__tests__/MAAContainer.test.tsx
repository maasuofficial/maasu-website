import React from 'react'
import ReactDOM from 'react-dom'
/* import { act } from 'react-dom/test-utils' */
import { MAA } from '../MAAContainer'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    /* act(() => */
    ReactDOM.render(
      <MAA
        alumni={[]}
        fetchAlumni={() => new Promise(() => {})}
        clearAlumni={() => ({ type: '' })}
        isFetchingAlumni={false}
        alumniError={''}
      />,
      div
    )
    /* ) */
    ReactDOM.unmountComponentAtNode(div)
  })
})
