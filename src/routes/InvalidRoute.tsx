import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'

interface Props {
  code: number
}

export const InvalidRoute: FC<RouteComponentProps & Props> = ({ code }) => {
  return (
    <div className="container">
      <h1 className="tc">{code}</h1>
      <p className="tc">
        Oops, we can't seem to find the page you're looking for.
      </p>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  )
}
