import React, { FC, Fragment, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { connect, ConnectedProps } from 'react-redux'
import { useDocumentTitle } from 'hooks/meta'
import { AppState } from 'store/types'
import { fetchConferences } from 'store/Conferences/actions'
import { A } from 'components/Link'
import { Container } from 'components/Container'
import { TextBlock } from 'components/TextBlock'
import {
  getConferences,
  getIsFetchingConferences,
  getConferencesError,
} from 'store/selectors'
import { SkeletonProvider, SkeletonConsumer } from 'components/Skeleton'
import {
  HOST_INFO_1,
  HOST_PRELUDE_1,
  HOST_1,
  HOST_1_STMT,
  HOST_BID_REQUIREMENTS,
  HOST_2,
  HOST_2_STMT,
  HOST_2_CLOSING,
  LEADERSHIP_SUMMIT,
  SPRING_CONFERENCE,
  FALL_CONFERENCE,
  HOST_FORM,
} from 'constants/strings'

interface Props {}

export const Host: FC<RouteComponentProps & ReduxProps & Props> = ({
  fetchConferences,
  isFetchingConferences,
  conferences,
  conferencesError,
}) => {
  useDocumentTitle('Host a Conference')

  useEffect(() => {
    if (!conferences.length && !conferencesError.length) {
      fetchConferences()
    }
  }, [fetchConferences, conferences, conferencesError])

  const NUM_LS_BIDS = 5
  const NUM_SC_BIDS = 5

  const exLSList = conferences
    .filter((c) => c.type === LEADERSHIP_SUMMIT.value && c.bid.length > 0)
    .slice(0, NUM_LS_BIDS)

  const exSCList = conferences
    .filter(
      (c) =>
        (c.type === SPRING_CONFERENCE.value ||
          c.type === FALL_CONFERENCE.value) &&
        c.bid.length > 0
    )
    .slice(0, NUM_SC_BIDS)

  return (
    <SkeletonProvider isLoading={isFetchingConferences}>
      <Container>
        <TextBlock title="MAASU Conferences">
          <p>{HOST_INFO_1}</p>
        </TextBlock>
        <TextBlock title="Hosting a MAASU Conference">
          <p>{HOST_PRELUDE_1}</p>
          <ol>
            <li>
              <h5 className="title5">{HOST_1}</h5>
              <p>{HOST_1_STMT}</p>
              <A href={HOST_BID_REQUIREMENTS}>MAASU Bid Packet Requirements</A>
            </li>
            <p>
              Below are some example bid packets from schools that have hosted
              conferences in previous years.
            </p>
            <Fragment>
              <div>
                <h3 className="title6">
                  Example Bid Packets for a Leadership Summit
                </h3>
                <ul>
                  {[...Array(4)].map((_, i) => (
                    <SkeletonConsumer
                      key={i}
                      width={150}
                      height={18}
                      className="mb1"
                    />
                  ))}
                  <SkeletonConsumer width={150} height={18} />
                  {exLSList.map((c, i) => (
                    <li key={i}>
                      <A href={c.bid}>
                        {new Date(c.date).getFullYear()} - {c.title}
                      </A>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="title6">
                  Example Bid Packets for a Spring or Fall Conference
                </h3>
                <ul>
                  {[...Array(4)].map((_, i) => (
                    <SkeletonConsumer
                      key={i}
                      width={150}
                      height={18}
                      className="mb1"
                    />
                  ))}
                  <SkeletonConsumer width={150} height={18} />
                  {exSCList.map((c, i) => (
                    <li key={i}>
                      <A href={c.bid}>
                        {new Date(c.date).getFullYear()} - {c.title}
                      </A>
                    </li>
                  ))}
                </ul>
              </div>
            </Fragment>
            <li>
              <h5 className="title5 mt3">{HOST_2}</h5>
              <p>{HOST_2_STMT}</p>
              <p>{HOST_2_CLOSING}</p>
              <span>
                To apply for the bidding process, please fill out the{' '}
                <A href={HOST_FORM}>following form</A>.
              </span>
            </li>
          </ol>
        </TextBlock>
      </Container>
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

export const HostContainer = connector(Host)
