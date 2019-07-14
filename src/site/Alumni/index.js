import React from 'react';
import { Page, Type } from '../../components';

class Alumni extends React.Component {
  componentDidMount() {
    document.title = 'Alumni - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        <Type variant='sub2'>Alumni</Type>
        {/* TODO maa logo */}
        Purpose
The MAASU Alumni Association (MAA) is a group for all MAASU alumni. MAA’s purpose is to continue building and sustaining lifelong relationships between MAASU and its alumni through the following ways:
Providing social and career networking for alumni
Engaging students as future alumni
Providing alumni opportunities to reconnect with MAASU
Recognize alumni for various accomplishments and service
Providing an avenue for feedback to MAASU leadership Initiatives through MAA
Student Travel Scholarships to attend MAASU Conferences
MAA Panel at future MAASU Conferences
Initiatives through MAA
Student Travel Scholarships to attend MAASU Conferences
MAA Panel at future MAASU Conferences
MAA Membership
(MAA item image)
To become a MAA member, there is a one-time membership fee of $30. MAA members will then be mailed a MAASU Alumni Association wine glass. If you are interested in becoming a member of the MAASU Alumni Association, please follow these steps:
Fill out the MAASU Alumni Directory Form here.
Provide a one-time membership payment of $30.00 USD via PayPal below.
After completing steps 1 and 2, access to the Alumni Directory will be granted and a MAA wine glass will be mailed to you.
        {/* TODO paypal cart portal */}
If you would like more information or have any questions, please contact the Graduate Advisory Council gac@maasu.org
      </Page>
    );
  }
}

export default Alumni;