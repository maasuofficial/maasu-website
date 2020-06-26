import React, { FC } from 'react'
import { EA } from 'components/EmailAnchor'
import { APP_NAME, YEAR } from 'constants/strings'

interface Props {}

export const FooterContainer: FC<Props> = () => {
  return (
    <footer>
      <div className="container">
        <div className="tr">
          <span>
            For additional information or questions regarding the website,
            please contact <EA>technet@maasu.org</EA>.
          </span>
          <br />
          <br />
          <span className="fs0 ffhind">
            &copy; {YEAR} {APP_NAME}. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
