import React, { FC, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { Container } from 'components/Container'
import { POST_REQUEST_FORM_URL } from 'constants/strings'

type Props = RouteComponentProps & {}

export const PostRequestComponent: FC<Props> = () => {
  // redirect
  useEffect(() => {
    window.location.assign(POST_REQUEST_FORM_URL)
  }, [])

  // loading state
  return (
    <Container>
      <div className="tc">loading...</div>
    </Container>
  )
}
