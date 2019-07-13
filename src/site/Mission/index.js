import React from 'react';
import { Page, Type } from '../../components';

class Mission extends React.Component {
  componentDidMount() {
    document.title = 'Mission - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <React.Fragment>
        <Page>
          <Type variant='subtitle2'>Purpose</Type>
          <p>
            The Midwest Asian American Students Union (MAASU) is an organization that began in response
            to a need for political unity among Asian American students in the Midwest. By 1990, there
            were more than 20 universities in the Midwest that had formed Asian Pacific Islander American
            (APIA) organizations. Some had been around for years, while others were still in their infancy.
            Students felt a need for an organization that would support the growth of their groups and organize
            Midwestern Asian American students for political activism. MAASU works to recognize the needs of
            the Asian American community by assisting schools with the establishment of Asian American student
            organizations, promoting leadership among students, addressing educational needs and rights of
            the Asian American community, and developing a channel of communication among Asian American
            student organizations in the Midwest.
          </p>
        </Page>
        <Page>
          <Type variant='subtitle2'>Mission</Type>
          <p>
            The Midwest Asian American Students Union strives to recognize the needs of the Asian Pacific
            Islanders American (APIA) Community. The following list contains the objectives of MAASU:</p>
          <ul>
            <li>Assist schools with the establishment of APIA student organizations, APIA cultural
              center and/or an Asian American Studies Program</li>
            <li>Promote leadership among APIA students through programs including, but not limited to,
              the Leadership Retreat, Spring Conference and other various programming</li>
            <li>Address educational needs and rights of the APIA community and provide scholarship
              information for all APIA students</li>
            <li>Develop and maintain a channel of communication for APIA student organizations in
              the Midwest through emails, bi-weekly newsletter and networking</li>
            <li>Support and encourage all APIA students to work toward social change by providing a
              forum for social consciousness</li>
            <li>Unite and strengthen the APIA community‘s stance against all forms of oppression</li>
          </ul>
        </Page>
      </React.Fragment>
    );
  }
}

export default Mission;