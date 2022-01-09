import React, { FC, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { connect, ConnectedProps } from 'react-redux'
import { AppState } from 'store/types'
import { useDocumentTitle } from 'hooks/meta'
import { getIsFetchingAwards, getAwards, getAwardsError } from 'store/selectors'
import { fetchAwards } from 'store/actions'
import { A } from 'components/Link'
import { Block } from 'components/Block'
import { Container } from 'components/Container'
import { TextBlock } from 'components/TextBlock'
import { Award } from 'store/Awards/types'
import {
  AWARDS_BOA_ISOPEN,
  AWARDS_BOA_LINK,
  AWARDS_BOA_STATUS,
  AWARDS_BOA_STMT,
  AWARDS_CC_STATUS,
  AWARDS_CC_STMT,
  AWARDS_CC_ISOPEN,
  AWARDS_CC_LINK,
  AWARDS_MS_STATUS,
  AWARDS_MS_STMT,
  AWARDS_MS_ISOPEN,
  AWARDS_MS_LINK,
  AWARDS_STMT,
} from 'constants/strings'

type Props = RouteComponentProps & ReduxProps & {}

export const Awards: FC<Props> = ({
  fetchAwards,
  isFetchingAwards,
  awards,
  awardsError,
}) => {
  useDocumentTitle('Awards')

  useEffect(() => {
    if (!awards.length && !awardsError.length) {
      fetchAwards()
    }
  }, [fetchAwards, awards, awardsError])

  const renderAwardsTable = (awardName: string, awards: Award[]) =>
    awards.length ? (
      <Block>
        <h5 className="title5 mb2">Previous {awardName} awards</h5>
        <table>
          <thead>
            <tr>
              <td>Recipient</td>
              <td>School</td>
              <td>Year</td>
            </tr>
          </thead>
          <tbody>
            {awards.map((a, i) => (
              <tr key={i}>
                <td>{a.recipient}</td>
                <td>{a.school}</td>
                <td>{new Date(a.date).getFullYear()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Block>
    ) : null

  const ccAwards = awards.filter((a) => a.type === 'CC')
  const msAwards = awards.filter((a) => a.type === 'MS')
  const boaAwards = awards.filter((a) => a.type === 'BOA')

  return (
    <Container>
      <TextBlock title="Awards">
        <p>{AWARDS_STMT}</p>
        <ul>
          <li className="my2">
            <h5 className="title5">Charles Chang Leadership Award</h5>
            <p>{AWARDS_CC_STMT}</p>
            <p>
              {AWARDS_CC_STATUS}
              {AWARDS_CC_ISOPEN ? (
                <A href={AWARDS_CC_LINK}>Apply here.</A>
              ) : null}
            </p>

            {isFetchingAwards ? (
              <span>loading...</span>
            ) : (
              renderAwardsTable('Charles Chang Leadership', ccAwards)
            )}
          </li>
          <li className="my2">
            <h5 className="title5">Midwestern Star Award</h5>
            <p>{AWARDS_MS_STMT}</p>
            <p>
              {AWARDS_MS_STATUS}
              {AWARDS_MS_ISOPEN ? (
                <A href={AWARDS_MS_LINK}>Apply here.</A>
              ) : null}
            </p>

            {isFetchingAwards ? (
              <span>loading...</span>
            ) : (
              renderAwardsTable('Midwestern Star', msAwards)
            )}
          </li>
          <li className="my2">
            <h5 className="title5">Board of Advisors Award</h5>
            <p>{AWARDS_BOA_STMT}</p>
            <p>
              {AWARDS_BOA_STATUS}
              {AWARDS_BOA_ISOPEN ? (
                <A href={AWARDS_BOA_LINK}>Apply here.</A>
              ) : null}
            </p>

            {isFetchingAwards ? (
              <span>loading...</span>
            ) : (
              renderAwardsTable('Board of Advisors (BOA)', boaAwards)
            )}
          </li>
        </ul>
      </TextBlock>
    </Container>
  )
}

const mapStateToProps = (state: AppState) => ({
  isFetchingAwards: getIsFetchingAwards(state),
  awards: getAwards(state),
  awardsError: getAwardsError(state),
})

const mapDispatchToProps = {
  fetchAwards,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

export const AwardsContainer = connector(Awards)
