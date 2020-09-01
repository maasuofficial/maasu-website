import React, { FC, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { EA } from 'components/EmailAnchor'
import { TextBlock } from 'components/TextBlock'
import { AppState } from 'store/types'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { fetchConferences } from 'store/actions'
import {
  getIsFetchingConferences,
  getConferences,
  getConferencesError,
} from 'store/selectors'
import { MAASUX, MAASUX_STMT, MONTHS } from 'constants/strings'
import { SkeletonProvider, SkeletonConsumer } from 'components/Skeleton'

type Props = RouteComponentProps & ReduxProps & {}

export const MAASUx: FC<Props> = ({
  isFetchingConferences,
  fetchConferences,
  conferences,
  conferencesError,
}) => {
  useDocumentTitle('MAASUx')

  const numConferenceSkeletons = 17

  useEffect(() => {
    if (!conferences.length && !conferencesError.length) {
      fetchConferences()
    }
  }, [conferences, fetchConferences, conferencesError])

  return (
    <SkeletonProvider isLoading={true}>
      <TextBlock title="MAASUx">
        <p>{MAASUX_STMT}</p>
        <p>
          If your school is interested in hosting a MAASUx, please contact our
          programming chair for more information at{' '}
          <EA>programming@maasu.org</EA>.
        </p>
      </TextBlock>
      <TextBlock title="Previous MAASUx Hosts">
        {!conferencesError && (
          <table className="w-100 mb4">
            <thead>
              <tr>
                <th>Date</th>
                <th>Conference Title</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {isFetchingConferences &&
                [...Array(numConferenceSkeletons)].map((_, i) => (
                  <tr key={i}>
                    <td>
                      <SkeletonConsumer
                        width={120 + Math.random() * 20}
                        height={20}
                      />
                    </td>
                    <td>
                      <SkeletonConsumer
                        width={40 + Math.random() * 300}
                        height={20}
                      />
                    </td>
                    <td>
                      <SkeletonConsumer
                        width={140 + Math.random() * 200}
                        height={20}
                        className=""
                      />
                    </td>
                  </tr>
                ))}

              {conferences
                .filter((c) => c.type === MAASUX.value)
                .map((c, index) => {
                  const d = new Date(c.date)
                  const ye = d.getFullYear()
                  const mo = MONTHS[d.getMonth()]

                  const date = c.isApproxDate
                    ? `${mo}, ${ye}`
                    : `${mo} ${d.getDate()}, ${ye}`

                  return (
                    c.id && (
                      <tr key={index}>
                        <td>{date}</td>
                        <td>{c.title}</td>
                        <td>{`${c.host}, ${c.state}`}</td>
                      </tr>
                    )
                  )
                })}
            </tbody>
          </table>
        )}
      </TextBlock>
    </SkeletonProvider>
  )
}

const mapStateToProps = (state: AppState) => ({
  isFetchingConferences: getIsFetchingConferences(state),
  conferences: getConferences(state),
  conferencesError: getConferencesError(state),
})

const mapDispatchToProps = {
  fetchConferences,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

export const MAASUxContainer = connector(MAASUx)
