import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { InvalidRoute } from 'routes/InvalidRoute'

interface Props {
  component: React.ComponentType
  isAuthorized?: boolean
}

export const PrivateRoute: FC<RouteComponentProps & Props> = ({
  component: Component,
  isAuthorized = false,
  ...props
}) => {
  return isAuthorized ? <Component {...props} /> : <InvalidRoute code={403} />
}
