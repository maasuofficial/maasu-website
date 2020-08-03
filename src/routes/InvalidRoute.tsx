import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'

interface Props {
  code: number
}

export const InvalidRoute: FC<RouteComponentProps & Props> = ({ code }) => {
  return (
    <div className="container my9">
      <h2 className="title2 tc">{code}</h2>
      <p className="tc">
        Oops, we can't seem to find the page you're looking for.
      </p>
      <button
        onClick={() => window.history.back()}
        className="clearall tdu hov-c-primary-main"
      >
        Go Back
      </button>
    </div>
  )
}
