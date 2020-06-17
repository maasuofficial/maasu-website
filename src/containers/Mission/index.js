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
          <div className="w-70 w-30-ns mxa">
            <img
              src={`${process.env.PUBLIC_URL}/assets/branding/light/text.svg`}
              alt={APP_NAME_LONG}
            />
          </div>
          <p>
            The Midwest Asian Pacific Islander Desi American Students Union
            (MAASU) is a 501(c)(3) nonprofit organization that began in response
            to a need for political unity among Asian American students in the
            Midwest. By 1990, there were more than 20 universities in the
            Midwest that had formed Asian Pacific Islander American (APIA)
            organizations. Some had been around for years, while others were
            still in their infancy.
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
            communication among Asian American student organizations across the
            Midwest.
          </p>
        </Page>
        <Page>
          <Type variant="sub2">
            <span className="tc dispb">Our Mission</span>
          </Type>
          <p>
            MAASU strives to recognize the needs of the Asian Pacific Islander
            Desi American (APIDA) community by:
          </p>
          <ul>
            <li>
              Promoting leadership among APIDA students through programs
              including, but not limited to, the Leadership Retreat, Spring
              Conference, and other various programming
            </li>
            <li>
              Assisting schools with the establishment of APIDA student
              organizations, an APIDA cultural center and an Asian American
              Studies program
            </li>
            <li>
              Supporting and encouraging all APIDA students to work toward
              social change by providing a forum for social consciousness
            </li>
            <li>
              Developing and maintaining a channel of communication for APIDA
              student organizations in the Midwest through emails, newsletters
              and networking
            </li>
            <li>
              Uniting and strengthening the APIDA community stance against all
              forms of oppression
            </li>
          </ul>
        </Page>
        <Page>
          <p className="mt0 tc fs2 ffhind fw700">Who We Serve</p>
          <p>
            Our primary outreach is to undergraduate college students located in
            the Midwest region. We are broadening our scope to include high
            school students and graduate students.
          </p>
          <p>
            On average, around 20 colleges and universities are engaged with
            MAASU annually spanning the following states: Colorado, Illinois,
            Indiana, Iowa, Kansas, Michigan, Minnesota, Missouri, Nebraska,
            Tennessee, Oklahoma, Ohio, and Wisconsin.
          </p>
        </Page>
        <Page>
          <Type variant="sub2">
            <span className="tc dispb">Stategic Plan</span>
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
      </Fragment>
    )
  }
}

export default Mission
