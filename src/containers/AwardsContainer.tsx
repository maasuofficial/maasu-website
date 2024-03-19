import React, { useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { connect, ConnectedProps } from 'react-redux'
import { AppState } from '../store/types'
import { useDocumentTitle } from '../hooks/meta'
import {
  getIsFetchingAwards,
  getAwards,
  getAwardsError,
} from '../store/selectors'
import { fetchAwards } from '../store/actions'
import { A } from '../components/Link'
import { Block } from '../components/Block'
import { Container } from '../components/Container'
import { TextBlock } from '../components/TextBlock'
import { Award } from '../store/Awards/types'

type Props = RouteComponentProps & ReduxProps & {}

export const Awards = ({
  fetchAwards,
  isFetchingAwards,
  awards,
  awardsError,
}: Props) => {
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
        <p>
          MAASU gives out three types of awards at the annual Spring Conference:
          the Charles Chang Leadership Award, the Midwestern Star Leadership
          Award, and the MAASU Board of Advisors Award. Winners for all awards
          are announced annually at the MAASU Spring Conference.
        </p>
        <ul>
          <li className="my2">
            <h5 className="title5">Charles Chang Leadership Award</h5>
            <p>
              The Charles Chang Leadership Award was created in 1993 in honor of
              the MAASU’s founder Charles Chang. Each academic year, the award
              is presented to a student who demonstrates leadership and
              dedication to the APIDA community, along with a $250 scholarship
              and plaque.
            </p>
            <p>
              Applications are open! The submission deadline is April 3nd, 2024
              at 11:59 PM MT (12:59 AM CT, 1:59 AM ET).{' '}
              <A href="https://forms.gle/vmr3uLqQdqxGmMNw6">Apply here.</A>
            </p>

            {isFetchingAwards ? (
              <span>loading...</span>
            ) : (
              renderAwardsTable('Charles Chang Leadership', ccAwards)
            )}
          </li>
          <li className="my2">
            <h5 className="title5">Midwestern Star Award</h5>
            <p>
              Students nominated for the Midwestern Stars can be anyone who has
              made a great impact on their surrounding APIDA community through
              contributions of advisement, programming, leadership, or other
              means that have uplifted a community higher than what has been
              done previously.
            </p>
            <p>
              Applications are open! The submission deadline is April 3nd, 2024
              at 11:59 PM MT (12:59 AM CT, 1:59 AM ET).{' '}
              <A href="https://forms.gle/MLADDtj5iu6R1AQa7">Apply here.</A>
            </p>

            {isFetchingAwards ? (
              <span>loading...</span>
            ) : (
              renderAwardsTable('Midwestern Star', msAwards)
            )}
          </li>
          <li className="my2">
            <h5 className="title5">Board of Advisors Award</h5>
            <p>
              The BOA Award is an award that recognizes Asian Pacific Islander
              American student organizations that have accomplished greatness on
              their campus and in the Midwest community. The BOA Award and $100
              prize is presented annually at the MAASU Spring Conference banquet
              to one organization or school.
            </p>
            <p>
              Applications are open! The submission deadline is April 3nd, 2024
              at 11:59 PM MT (12:59 AM CT, 1:59 AM ET).{' '}
              <A href="https://forms.gle/TeQkYWA3DFma9EU56">Apply here.</A>
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
