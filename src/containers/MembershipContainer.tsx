import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { EMemberStatus, Member } from 'store/types'
import { Page, Type } from 'components'
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
import { members } from 'constants/data/members'

interface Props {}

export const MembershipContainer: FC<RouteComponentProps & Props> = () => {
  useDocumentTitle('Membership')

  const dictionarySort = (a: Member, b: Member): number => {
    const articles = ['a', 'an', 'the']

    const { name: nameA } = a
    const { name: nameB } = b

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
        {members
          .sort(dictionarySort)
          .filter((m: Member) => m.status === EMemberStatus.Active)
          .map((member, index) => (
            <li key={index}>
              {member.orgUrl ? (
                <a href={member.orgUrl}>{member.name}</a>
              ) : (
                <span>{member.name}</span>
              )}
            </li>
          ))}

        {/* <li><a href='https://www.asianamerican.northwestern.edu/'>Northwestern University</a></li> */}
        {/* <li><a href='https://www.nwtc.edu/student-experience/student-involvement/clubs-and-organizations/multicultural/asian-american-student-association'>Northeast Wisconsin Technical College</a></li> */}
        {/* <li><a href='https://www3.nd.edu/~aaa/'>Notre Dame University</a></li> */}
        {/* <li><a href='https://webstu.onu.edu/aasu/'>Ohio Northern University</a></li> */}
        <li>
          <a href="https://campuslink.okstate.edu/organization/asianamerican-student-association">
            Oklahoma State University
          </a>
        </li>
        <li>
          <a href="https://boilerlink.purdue.edu/organization/purdueaaa">
            Purdue University at West Lafayette
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/aaaohiostate/?fref=ts">
            The Ohio State University
          </a>
        </li>
        {/* <li><a href='https://www.facebook.com/awa.st.catherine/'>St. Catherine’s University</a></li> */}
        {/* <li><a href='https://www.facebook.com/SLUAAA/'>St. Louis University</a></li> */}
        {/* <li><a href='https://www.facebook.com/groups/174617512566504/'>University of Colorado Boulder</a></li> */}
        <li>
          <a href="https://www.facebook.com/AASIAUIC/">
            University of Illinois at Chicago
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/AsianAmericanAssociationUIUC/">
            University of Illinois at Urbana Champaign
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/UIAPACC/">University of Iowa</a>
        </li>
        <li>
          <a href="https://www.stuorg.iastate.edu/site/asu">
            Iowa State University
          </a>
        </li>
        <li>
          <a href="https://rockchalkcentral.ku.edu/organization/aasu">
            University of Kansas
          </a>
        </li>
        <li>
          <a href="https://maizepages.umich.edu/organization/aaa">
            University of Michigan – Ann Arbor
          </a>
        </li>
        {/* <li><a href='https://bulldoglink.d.umn.edu/organization/apaa'>University of Minnesota – Duluth</a></li> */}
        <li>
          <a href="https://www.asu-umn.org/">
            University of Minnesota Twin Cities
          </a>
        </li>
        <li>
          <a href="https://mnsumankato.campuslabs.com/engage/organization/asia">
            Minnesota State University - Mankato
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/mizzouaaa">
            University of Missouri
          </a>
        </li>
        <li>
          <a href="https://info.umkc.edu/unews/umkcs-asia-organization-has-arrived/">
            University of Missouri Kansas City
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/UNLASU">
            University of Nebraska Lincoln
          </a>
        </li>
        {/* <li><a href='https://www.facebook.com/groups/uwpasiaclub/'>University of Wisconsin – Platteville</a></li> */}
        {/* <li><a href='https://win.wisc.edu/organization/aasu'>University of Wisconsin – Madison</a></li> */}
        {/* <li><a href='https://www.vandyaasa.com/'>Vanderbilt University</a></li> */}
        <li>
          <a href="https://www.valpo.edu/multicultural/student-organizations/asian-american-pacific-island-coalition-aapic/">
            Valparaiso University
          </a>
        </li>
        {/* <li><a href='https://www.facebook.com/aaa.wustl/'>Washington University – St Louis</a></li> */}
        <li>
          <a href="https://www.facebook.com/ASCWSU/">
            Wichita State University
          </a>
        </li>
        <li>
          <a href="https://www.winona.edu/inclusion-diversity/clubs.asp">
            Winona State University
          </a>
        </li>
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
