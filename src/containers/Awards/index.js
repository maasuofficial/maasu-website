import React from 'react'
import { Page, Type } from '../../components'
import { Link } from '@reach/router'

class Awards extends React.Component {
  componentDidMount() {
    document.title = 'Awards - The Midwest Asian American Students Union'
  }

  render() {
    return (
      <Page>
        <Type variant="h2">Awards</Type>
        <p>
          MAASU gives out three types of awards at the annual Spring Conference:
          the Charles Chang Leadership Award, the Midwestern Star Leadership
          Award, and the MAASU Board of Advisors Award. Winners for all awards
          are announced annually at the MAASU Spring Conference.
        </p>
        <ul>
          <li>
            <Type variant="sub4">Charles Chang Leadership Award</Type>
            <p>
              The Charles Chang Leadership Award was created in 1993 in honor of
              the MAASU’s founder Charles Chang. Each academic year, the award
              is presented to a student who demonstrates leadership and
              dedication to the Asian Pacific Islander American (APIA)
              community, along with a $250 scholarship and plaque.
            </p>
            <p>The Application is now closed.</p>
          </li>
          <li>
            <Type variant="sub4">Midwestern Star Award</Type>
            <p>
              Students nominated for the Midwestern Stars can be anyone who has
              made a great impact on their APIA community through contributions
              of advisement, programming, leadership, or other means that have
              uplifted a community higher than what has been previously.
            </p>
            <p>The Application is now closed.</p>
          </li>
          <li>
            <Type variant="sub4">BOA (Board of Advisors) Award</Type>
            <p>
              The MAASU BOA Award is an award that recognizes Asian Pacific
              Islander American student organizations that have accomplished
              greatness on their campus and in the Midwest community. The BOA
              Award and $100 prize is presented annually at the MAASU Spring
              Conference banquet to one organization or school.
            </p>
            <p>The Application is now closed.</p>
          </li>
        </ul>
        <p>
          See previous awards <Link to="/pastawards">here</Link>.
        </p>
      </Page>
    )
  }
}

export default Awards
