import React, { FC } from 'react'
/* import React, { FC, useState } from 'react' */
import { Router, RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { MAADirectoryComponent } from 'components/MAADirectoryComponent'
import { MAAProfileComponent } from 'components/MAAProfileComponent'
import { MAALoginComponent } from 'components/MAALoginComponent'

interface Props {}

export type MAAComponentProps = {
  // TODO
  auth?: string
}

export const MAAContainer: FC<RouteComponentProps & Props> = () => {
  useDocumentTitle('MAASU Alumni Association')

  /* const [user, setUser] = useState<boolean>(false) */

  /* const handleLogin = (e: React.FormEvent<HTMLFormElement>) => { */
  /*   e.preventDefault() */
  /*   setUser(true) */
  /* } */

  const componentProps = {
    auth: 'TODO future props',
  }

  /* const isAuthenticated = user */

  return (
    <div className="container">
      <Router>
        <MAALoginComponent
          path="/login"
          {...componentProps}
          // handleLogin={handleLogin}
          handleLogin={() => {}}
        />
        <MAADirectoryComponent default {...componentProps} />
        <MAAProfileComponent path="/profile" {...componentProps} />
      </Router>
    </div>
  )
}
