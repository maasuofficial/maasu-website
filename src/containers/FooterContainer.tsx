import React, { FC } from 'react'
import { APP_NAME, YEAR } from 'constants/strings'

interface Props {}

export const FooterContainer: FC<Props> = () => {
  return (
    <footer>
      <div className="container">
        <span className="fs0 ftemp">
          &copy; {YEAR} {APP_NAME}. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
