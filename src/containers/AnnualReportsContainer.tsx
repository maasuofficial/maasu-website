import React, { FC, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { AppState } from 'store/types'
import { RouteComponentProps } from '@reach/router'
import { fetchReports } from 'store/actions'
import {
  getIsFetchingReports,
  getReports,
  getReportsError,
} from 'store/selectors'
import { A } from 'components/Link'
import { useDocumentTitle } from 'hooks/meta'

type Props = RouteComponentProps & ReduxProps & {}

export const AnnualReports: FC<Props> = ({
  fetchReports,
  isFetchingReports,
  reports,
  reportsError,
}) => {
  useDocumentTitle('Annual Report')

  useEffect(() => {
    if (reports && !reports.length && !reportsError) {
      fetchReports()
    }
  }, [fetchReports, reports, reportsError])

  return (
    <div className="container">
      <h3 className="title3 tc pt6">Annual Report</h3>
      <p className="tc">
        The annual report is a compilation of all of MAASU's achievements,
        distinctions, and news for the given year. Below are the previous
        reports.
      </p>
      <br />
      <br />
      {isFetchingReports ? (
        <span>loading...</span>
      ) : (
        <ul>
          {reports.map((r, i) => {
            const sy = new Date(r.startDate).getFullYear()
            const ey = new Date(r.endDate).getFullYear()
            return (
              <li key={i}>
                <A href={r.url}>
                  {sy}-{ey}
                </A>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  isFetchingReports: getIsFetchingReports(state),
  reports: getReports(state),
  reportsError: getReportsError(state),
})

const mapDispatchToProps = {
  fetchReports,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

export const AnnualReportsContainer = connector(AnnualReports)
