import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import {
  NEW_TAB_PROPS,
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
      <section>
        <h4 className="title4">The MAASU Alumni Association</h4>
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
            <a
              {...NEW_TAB_PROPS}
              href={MAA_ALUMNI_DIR_FORM}
              className="c-inh tdu hov-c-primary-main"
            >
              {MAA_MEMBERSHIP_STMT_1}
            </a>
          </li>
          <li>
            <a
              {...NEW_TAB_PROPS}
              href={MAA_MEMBERSHIP_FEE_URL}
              className="c-inh tdu hov-c-primary-main"
            >
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
