import React, { FC, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { fetchMembers } from 'store/Members/actions'
import {
  getIsFetchingMembers,
  getMembers,
  getMembersError,
} from 'store/Members/selectors'
import { AppState } from 'store/types'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { Member } from 'store/Members/types'
import { Page, Type } from 'components'
import membersCache from 'constants/cache/members.json'
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

const Membership: FC<Props> = ({
  fetchMembers,
  isFetchingMembers,
  members,
  membersError,
}) => {
  useDocumentTitle('Membership')

  const dictionarySort = (
    { name: nameA }: Member,
    { name: nameB }: Member
  ): number => {
    const articles = ['a', 'an', 'the']

    let nameAArr = nameA.toLocaleLowerCase().split(' ')
    let nameBArr = nameB.toLocaleLowerCase().split(' ')

    if (articles.indexOf(nameAArr[0]) >= 0) {
      nameAArr = nameAArr.slice(1)
    }

    if (articles.indexOf(nameBArr[0]) >= 0) {
      nameBArr = nameBArr.slice(1)
    }

    return nameAArr[0].localeCompare(nameBArr[0])
  }

  const isValidActiveMember = (m: Member): boolean =>
    m.id != null &&
    m.id.length > 0 &&
    m.name != null &&
    m.name.length > 0 &&
    m.expDate != null &&
    m.name.length > 0 &&
    new Date(new Date().toDateString()) <= new Date(m.expDate)

  const getMembersOrFallback = (): Member[] => {
    return members && members.length
      ? members
      : ((membersCache.data as unknown) as Member[])
  }

  const filteredMembers: Member[] = getMembersOrFallback()
    .filter(isValidActiveMember)
    .sort(dictionarySort)

  useEffect(() => {
    if (!members.length && !membersError.length) {
      fetchMembers()
    }
  }, [fetchMembers, members, membersError])

  return (
    <div className="container">
      <h3 className="tc pt5">Membership</h3>
      <p>{MEMBERSHIP_PRELUDE}</p>

      <h4 className="tc pt5">Benefits</h4>
      <ul>
        <li>{MEMBERSHIP_BENEFITS_1}</li>
        <li>{MEMBERSHIP_BENEFITS_2}</li>
        <li>{MEMBERSHIP_BENEFITS_3}</li>
      </ul>
      <p>
        For more information on eligibility and benefits, contact{' '}
        <a href="mailto:ecc@maasu.org">ecc@maasu.org</a>.
      </p>

      <h4 className="tc pt5">Members</h4>
      <ul>
        {!isFetchingMembers ? (
          filteredMembers.map((member, index) => (
            <li key={index}>
              {member.orgUrl ? (
                <a href={member.orgUrl}>{member.name}</a>
              ) : (
                <span>{member.name}</span>
              )}
            </li>
          ))
        ) : (
          <span>loading...</span>
        )}
      </ul>
      <React.Fragment>
        <Page>
          <Type variant="h2">Representatives</Type>
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
          <p>
            For additional questions regarding membership please contact{' '}
            <a href="mailto:ecc@maasu.org">ecc@maasu.org</a>.
          </p>
        </Page>
        <Page>
          <Type variant="h2">Eligibility</Type>
          <p>{MEMBERSHIP_ELIGIBILITY_PRELUDE}</p>
          <ul>
            <li>{MEMBERSHIP_ELIGIBILITY_STMT_1}</li>
            <li>{MEMBERSHIP_ELIGIBILITY_STMT_2}</li>
          </ul>
          <Type variant="h2">Join</Type>

          <Type variant="sub6">
            (you will be redirected to Paypal for secure payment confirmation)
          </Type>
          <form
            className={'payment-members'}
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
            <p>MAASU offers three plans for membership:</p>
            <select name="os0">
              <option value="1 Year">1 Year $75.00 USD</option>
              <option value="2 Years">2 Years $140.00 USD</option>
              <option value="3 Years">3 Years $200.00 USD</option>
            </select>
            <p>
              <input name="currency_code" type="hidden" value="USD" />
              <br />
              <input
                alt="PayPal - The safer, easier way to pay online!"
                name="submit"
                src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png"
                type="image"
              />
              <br />
              <img
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                alt=""
                width="1"
                height="1"
              />
            </p>
          </form>
        </Page>
      </React.Fragment>
    </div>
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
