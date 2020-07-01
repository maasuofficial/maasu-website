import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { findAsset } from 'utils/files'
import {
  NEW_TAB_PROPS,
  APP_NAME_LONG,
  MAA_PURPOSE_PRELUDE,
  MAA_PURPOSE_STMT_1,
  MAA_PURPOSE_STMT_2,
  MAA_PURPOSE_STMT_3,
  MAA_PURPOSE_STMT_4,
  MAA_PURPOSE_STMT_5,
  MAA_MEMBERSHIP_PRELUDE,
  MAA_ALUMNI_DIR_FORM,
  MAA_MEMBERSHIP_STMT_1,
  MAA_MEMBERSHIP_FEE_URL,
  MAA_MEMBERSHIP_STMT_2,
  MAA_MEMBERSHIP_POST,
  DONATE_MAA_URL,
} from 'constants/strings'

type Props = RouteComponentProps & {}

export const AlumniContainer: FC<Props> = () => {
  useDocumentTitle('Alumni')

  return (
    <div className="container py6">
      <section className="tc mb4">
        <img
          className="w-40 w-80-s pt4"
          src={findAsset('branding/light/text.svg')}
          alt={APP_NAME_LONG}
        />
        <h4 className="title4 ttu">Alumni Association</h4>
      </section>
      <section>
        <h4 className="title4">Purpose</h4>
        <p>{MAA_PURPOSE_PRELUDE}</p>
        <ul>
          <li>{MAA_PURPOSE_STMT_1}</li>
          <li>{MAA_PURPOSE_STMT_2}</li>
          <li>{MAA_PURPOSE_STMT_3}</li>
          <li>{MAA_PURPOSE_STMT_4}</li>
          <li>{MAA_PURPOSE_STMT_5}</li>
        </ul>
      </section>
      <section>
        <h4 className="title4">MAA Membership</h4>
        <p>{MAA_MEMBERSHIP_PRELUDE}</p>
        <ol>
          <li>
            <a {...NEW_TAB_PROPS} href={MAA_ALUMNI_DIR_FORM}>
              {MAA_MEMBERSHIP_STMT_1}
            </a>
          </li>
          <li>
            <a {...NEW_TAB_PROPS} href={MAA_MEMBERSHIP_FEE_URL}>
              {MAA_MEMBERSHIP_STMT_2}
            </a>
          </li>
        </ol>
        <p>{MAA_MEMBERSHIP_POST}</p>
      </section>
      <section>
        <h4 className="title4">Donation</h4>
        <p>
          If you would like to support the MAASU Alumni Association, consider
          donating <a href={DONATE_MAA_URL}>here</a>.
        </p>
      </section>
    </div>
  )
}
