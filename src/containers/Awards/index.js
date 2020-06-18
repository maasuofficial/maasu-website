import React from 'react'
import { Page, Type } from '../../components'
import { Link } from '@reach/router'
import {
  AWARDS_BOA_STATUS,
  AWARDS_BOA_STMT,
  AWARDS_CC_STATUS,
  AWARDS_CC_STMT,
  AWARDS_MS_STATUS,
  AWARDS_MS_STMT,
  AWARDS_STMT,
} from 'constants/strings'

class Awards extends React.Component {
  componentDidMount() {
    document.title = 'Awards - The Midwest Asian American Students Union'
  }

  render() {
    return (
      <Page>
        <Type variant="h2">
          <span className="fw700">Awards</span>
        </Type>
        <p>{AWARDS_STMT}</p>
        <ul>
          <li>
            <Type variant="sub4">
              <span className="fw700">Charles Chang Leadership Award</span>
            </Type>
            <p>{AWARDS_CC_STMT}</p>
            <p>{AWARDS_CC_STATUS}</p>
          </li>
          <li>
            <Type variant="sub4">
              <span className="fw700">Midwestern Star Award</span>
            </Type>
            <p>{AWARDS_MS_STMT}</p>
            <p>{AWARDS_MS_STATUS}</p>
          </li>
          <li>
            <Type variant="sub4">
              <span className="fw700">BOA (Board of Advisors) Award</span>
            </Type>
            <p>{AWARDS_BOA_STMT}</p>
            <p>{AWARDS_BOA_STATUS}</p>
          </li>
        </ul>
        <p>
          See previous award recipients <Link to="/pastawards">here</Link>.
        </p>
      </Page>
    )
  }
}

export default Awards
