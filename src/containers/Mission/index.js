import React, { Fragment } from 'react'
import { BImg, Page, Type } from 'components'
import { APP_NAME_LONG } from 'constants/strings'

class Mission extends React.Component {
  componentDidMount() {
    document.title = 'Our Mission - The Midwest Asian American Students Union'
  }

  render() {
    return (
      <Fragment>
        <Page>
          <Type variant="sub2">
            <span className="tc dispb">Our Purpose</span>
          </Type>
          <div className="w-100 w-50-ns mxa">
            <img
              src={`${process.env.PUBLIC_URL}/assets/branding/light/text.svg`}
              alt={APP_NAME_LONG}
            />
          </div>
          <p>
            <b>The Midwest Asian American Students Union</b> (MAASU) is an
            organization that began in response to a need for political unity
            among Asian American students in the Midwest. By 1990, there were
            more than 20 universities in the Midwest that had formed Asian
            Pacific Islander American (APIA) organizations. Some had been around
            for years, while others were still in their infancy.
          </p>
          <BImg
            className="w-100-s w-70-ns mxa"
            src={`${process.env.PUBLIC_URL}/assets/img/old-ecc.png`}
            alt="The original Executive Coordinating Committee"
          />
          <p>
            Students felt a need for an organization that would support the
            growth of their groups and organize Midwestern Asian American
            students for political activism. MAASU works to recognize the needs
            of the Asian American community by assisting schools with the
            establishment of Asian American student organizations, promoting
            leadership among students, addressing educational needs and rights
            of the Asian American community, and developing a channel of
            communication among Asian American student organizations in the
            Midwest.
          </p>
        </Page>
        <Page>
          <Type variant="sub2">
            <span className="tc dispb">Our Mission</span>
          </Type>
          <p>
            The Midwest Asian American Students Union strives to recognize the
            needs of the Asian Pacific Islanders American (APIA) Community. The
            following list contains the objectives of MAASU:
          </p>
          <ul>
            <li>
              Assist schools with the establishment of APIA student
              organizations, APIA cultural centers and Asian American Studies
              Programs
            </li>
            <li>
              Promote leadership among APIA students through programs including,
              but not limited to, the Leadership Retreat and Spring Conference
            </li>
            <li>
              Address educational needs and rights of the APIA community and
              provide scholarship information for all APIA students
            </li>
            <li>
              Develop and maintain a channel of communication for APIA student
              organizations in the Midwest through emails, newsletters and
              networking
            </li>
            <li>
              Support and encourage all APIA students to work toward social
              change by providing a forum for social consciousness
            </li>
            <li>
              Unite and strengthen the APIA community‘s stance against all forms
              of oppression
            </li>
          </ul>
        </Page>
        <Page>
          <Type variant="sub2">
            <span className="tc dispb">Stategic Mission</span>
          </Type>
          <p>
            MAASU strives to recognize the needs of its community by developing
            a strategic plan for the next few years. See our strategic plan for
            2020-2024{' '}
            <a
              href={`${process.env.PUBLIC_URL}/assets/files/MAASU_Strategic_Plan_2020-2024.pdf`}
            >
              here
            </a>
            .
          </p>
        </Page>
        <div className="footerSpace"></div>
      </Fragment>
    )
  }
}

export default Mission
