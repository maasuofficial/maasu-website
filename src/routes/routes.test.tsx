import React from 'react'
import { render } from '@testing-library/react'
import Routes from 'routes/routes'

test('renders learn react link', () => {
  const { getByText } = render(<Routes />)
  const linkElement = getByText(/home page/i)
  expect(linkElement).toBeInTheDocument()
})
