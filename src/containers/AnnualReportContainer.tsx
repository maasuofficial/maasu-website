import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { findAsset } from 'utils/files'

interface Props {}

export const AnnualReportContainer: FC<RouteComponentProps & Props> = () => {
  useDocumentTitle('Annual Report')

  return (
    <div className="container">
      <h3 className="tc pt5">Annual Report</h3>
      <p className="tc">
        The annual report is a compilation of all of MAASU's achievements,
        distinctions, and news for the given year. Below are the previous
        reports.
      </p>
      <br />
      <br />
      <ul>
        <li>
          <a href={findAsset('files/MAASU-Annual-Report-2019-20.pdf')}>
            2019-2020
          </a>
        </li>
      </ul>
    </div>
  )
}
