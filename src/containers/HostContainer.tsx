import React, { FC, Fragment, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { connect, ConnectedProps } from 'react-redux'
import { useDocumentTitle } from 'hooks/meta'
import { AppState } from 'store/types'
import { fetchConferences } from 'store/Conferences/actions'
import {
  getConferences,
  getIsFetchingConferences,
  getConferencesError,
} from 'store/selectors'
import {
  HOST_PRELUDE_1,
  HOST_1,
  HOST_1_STMT,
  HOST_1_1,
  HOST_1_1_A,
  HOST_1_2,
  HOST_1_3,
  HOST_1_3_A,
  HOST_1_3_B,
  HOST_1_3_C,
  HOST_1_4,
  HOST_1_4_A,
  HOST_1_5,
  HOST_1_6,
  HOST_1_6_A,
  HOST_1_6_B,
  HOST_1_6_C,
  HOST_1_7,
  HOST_1_7_A,
  HOST_1_7_B,
  HOST_1_8,
  HOST_1_9,
  HOST_1_9_A,
  HOST_1_10,
  HOST_1_11,
  HOST_1_11_A,
  HOST_1_11_B,
  HOST_1_11_C,
  HOST_1_12,
  HOST_1_12_A,
  HOST_1_13,
  HOST_1_14,
  HOST_1_14_A,
  HOST_1_14_A_1,
  HOST_1_14_A_2,
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
    <div className="container mb6">
      <h3 className="title3 tc pt6">Bid Process to Host a MAASU Conference</h3>
      <p className="tc">{HOST_PRELUDE_1}</p>
      <ol>
        <li>
          <h5 className="title5">{HOST_1}</h5>
          <p>{HOST_1_STMT}</p>
          <ol>
            <li>
              <span>{HOST_1_1}</span>
              <ol type="a">
                <li>{HOST_1_1_A}</li>
              </ol>
            </li>
            <li>{HOST_1_2}</li>
            <li>
              <span>{HOST_1_3}</span>
              <ol type="a">
                <li>{HOST_1_3_A}</li>
                <li>{HOST_1_3_B}</li>
                <li>{HOST_1_3_C}</li>
              </ol>
            </li>
            <li>
              <span>{HOST_1_4}</span>
              <ol type="a">
                <li>{HOST_1_4_A}</li>
              </ol>
            </li>
            <li>{HOST_1_5}</li>
            <li>
              <span>{HOST_1_6}</span>
              <ol type="a">
                <li>{HOST_1_6_A}</li>
                <li>{HOST_1_6_B}</li>
                <li>{HOST_1_6_C}</li>
              </ol>
            </li>
            <li>
              <span>{HOST_1_7}</span>
              <ol type="a">
                <li>{HOST_1_7_A}</li>
                <li>{HOST_1_7_B}</li>
              </ol>
            </li>
            <li>{HOST_1_8}</li>
            <li>
              <span>{HOST_1_9}</span>
              <ol type="a">
                <li>{HOST_1_9_A}</li>
              </ol>
            </li>
            <li>{HOST_1_10}</li>
            <li>
              <span>{HOST_1_11}</span>
              <ol type="a">
                <li>{HOST_1_11_A}</li>
                <li>{HOST_1_11_B}</li>
                <li>{HOST_1_11_C}</li>
              </ol>
            </li>
            <li>
              <span>{HOST_1_12}</span>
              <ol type="a">
                <li>{HOST_1_12_A}</li>
              </ol>
            </li>
            <li>{HOST_1_13}</li>
            <li>
              <span>{HOST_1_14}</span>
              <ol type="a">
                <li>
                  <span>{HOST_1_14_A}</span>
                  <ol>
                    <li>{HOST_1_14_A_1}</li>
                    <li>{HOST_1_14_A_2}</li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <p>
          Below are some example bid packets from schools that have hosted
          conferences in previous years.
        </p>
        {isFetchingConferences ? (
          <span>loading...</span>
        ) : (
          <Fragment>
            <div>
              <h3 className="title6">
                Example Bid Packets for a Leadership Summit
              </h3>
              <ul>
                {exLSList.map((c, i) => (
                  <li key={i}>
                    <a href={c.bid} target="_blank" rel="noopener noreferrer">
                      {new Date(c.date).getFullYear()} - {c.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="title6">
                Example Bid Packets for a Spring or Fall Conference
              </h3>
              <ul>
                {exSCList.map((c, i) => (
                  <li key={i}>
                    <a href={c.bid} target="_blank" rel="noopener noreferrer">
                      {new Date(c.date).getFullYear()} - {c.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Fragment>
        )}
        <li>
          <h5 className="title5 mt3">{HOST_2}</h5>
          <p>{HOST_2_STMT}</p>
          <p>{HOST_2_CLOSING}</p>
          <span>
            To apply for the bidding process, please fill out the{' '}
            <a href={HOST_FORM}>following form</a>.
          </span>
        </li>
      </ol>
    </div>
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