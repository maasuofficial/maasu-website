import React, { FC, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { EA } from 'components/EmailAnchor'
import { fetchMembers } from 'store/actions'
import {
  getIsFetchingMembers,
  getMembers,
  getMembersError,
} from 'store/selectors'
import { AppState } from 'store/types'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { Member } from 'store/Members/types'
import { A } from 'components/Link'
import { Container } from 'components/Container'
import { TextBlock } from 'components/TextBlock'
import { SkeletonProvider, SkeletonConsumer } from 'components/Skeleton'
import {
  MEMBERSHIP_BENEFITS_1,
  MEMBERSHIP_BENEFITS_2,
  MEMBERSHIP_BENEFITS_3,
  MEMBERSHIP_ELIGIBILITY_PRELUDE,
  MEMBERSHIP_ELIGIBILITY_STMT_1,
  MEMBERSHIP_ELIGIBILITY_STMT_2,
  MEMBERSHIP_PRELUDE,
  MREP_PRELUDE,
  MREP_DUTIES_1,
  MREP_DUTIES_2,
  MREP_DUTIES_3,
  MREP_DUTIES_4,
  MREP_DUTIES_5,
  MREP_STMT_1,
  MREP_STMT_2,
} from 'constants/strings'

type Props = RouteComponentProps & ReduxProps & {}

export const Membership: FC<Props> = ({
  fetchMembers,
  isFetchingMembers,
  members,
  membersError,
}) => {
  useDocumentTitle('Membership')

  const numSkeletonListItems = 27
  const renderSkeletonListItems = () =>
    [...Array(numSkeletonListItems)].map((_, i) => (
      <SkeletonConsumer
        key={i}
        width={140 + Math.random() * 130}
        height={16}
        className="mb1"
      />
    ))

  const filteredMembers: Member[] = members.filter(
    (m: Member) =>
      m.id != null &&
      m.id.length > 0 &&
      m.name != null &&
      m.name.length > 0 &&
      m.expDate != null &&
      m.expDate.length > 0 &&
      new Date(new Date().toDateString()) <= new Date(m.expDate)
  )

  useEffect(() => {
    if (!members.length && !membersError.length) {
      fetchMembers()
    }
  }, [fetchMembers, members, membersError])

  return (
    <SkeletonProvider isLoading={isFetchingMembers}>
      <Container>
        <TextBlock title="Membership">
          <p>{MEMBERSHIP_PRELUDE}</p>
          <p>Benefits include:</p>
          <ul>
            <li>{MEMBERSHIP_BENEFITS_1}</li>
            <li>{MEMBERSHIP_BENEFITS_2}</li>
            <li>{MEMBERSHIP_BENEFITS_3}</li>
          </ul>
          <p>
            For more information, contact <EA>ecc@maasu.org</EA>.
          </p>
        </TextBlock>
        <TextBlock title="Our Members">
          <ul className="mxa w-30 w-100-s">
            {renderSkeletonListItems()}
            {!membersError &&
              filteredMembers.map((member, index) => (
                <li key={index}>
                  {member.orgUrl ? (
                    <A href={member.orgUrl}>{member.name}</A>
                  ) : (
                    <span>{member.name}</span>
                  )}
                </li>
              ))}
          </ul>
        </TextBlock>
        <TextBlock title="Representatives">
          <p>{MREP_PRELUDE}</p>
          <ul>
            <li>{MREP_DUTIES_1}</li>
            <li>{MREP_DUTIES_2}</li>
            <li>{MREP_DUTIES_3}</li>
            <li>{MREP_DUTIES_4}</li>
            <li>{MREP_DUTIES_5}</li>
          </ul>
          <p>{MREP_STMT_1}</p>
          <p>{MREP_STMT_2}</p>
        </TextBlock>
        <TextBlock title="Eligibility">
          <p>{MEMBERSHIP_ELIGIBILITY_PRELUDE}</p>
          <ul>
            <li>{MEMBERSHIP_ELIGIBILITY_STMT_1}</li>
            <li>{MEMBERSHIP_ELIGIBILITY_STMT_2}</li>
          </ul>
        </TextBlock>
        <TextBlock title="Join">
          <form
            className="payment-members"
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="paypal"
          >
            <input name="cmd" type="hidden" value="_s-xclick" />
            <input
              name="hosted_button_id"
              type="hidden"
              value="PAC57KL3CTH2A"
            />
            <p>MAASU offers three payment plans for membership:</p>
            <select name="os0">
              <option value="1 Year">1 Year $75.00 USD</option>
              <option value="2 Years">2 Years $140.00 USD</option>
              <option value="3 Years">3 Years $200.00 USD</option>
            </select>
            <input name="currency_code" type="hidden" value="USD" />
            <br />
            <br />
            <button className="ma0" type="submit">
              Checkout with Paypal
            </button>
          </form>
        </TextBlock>
      </Container>
    </SkeletonProvider>
  )
}

const mapStateToProps = (state: AppState) => ({
  isFetchingMembers: getIsFetchingMembers(state),
  members: getMembers(state),
  membersError: getMembersError(state),
})

const mapDispatchToProps = {
  fetchMembers,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

export const MembershipContainer = connector(Membership)
