import React from 'react';
import { Page, Type } from '../../components';

class PastAwards extends React.Component {
  componentDidMount() {
    document.title = 'Past Awards Recipients - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        <Type variant='h2'>Past Award Recipients</Type>

        <Type variant='sub4'>Past Board of Advisors Award Winners</Type>
        <table>
          <thead>
            <tr>
              <td>Organization</td>
              <td>School</td>
              <td>Year</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Asian American Student Union</td>
              <td>University of Iowa</td>
              <td>2020</td>
            </tr>
            <tr>
              <td>Chinese Student Coalition</td>
              <td>Michigan State University</td>
              <td>2019</td>
            </tr>
            <tr>
              <td>Asian American Association</td>
              <td>University of Minnesota-Duluth</td>
              <td>2017</td>
            </tr>
            <tr>
              <td>Asian American Association</td>
              <td>St. Louis University</td>
              <td>2016</td>
            </tr>
            <tr>
              <td>Asian American Association</td>
              <td>University of Missouri</td>
              <td>2015</td>
            </tr>
            <tr>
              <td>Asian Pacific American Coalition</td>
              <td>Northwestern University</td>
              <td>2014</td>
            </tr>
            <tr>
              <td>Project Voice</td>
              <td>Loyola University of Chicago</td>
              <td>2013</td>
            </tr>
            <tr>
              <td>Asian American Student Association</td>
              <td>Oklahoma State University</td>
              <td>2012</td>
            </tr>
            <tr>
              <td>Asian American Association</td>
              <td>University of Missouri</td>
              <td>2011</td>
            </tr>
            <tr>
              <td>Asian American Student Union</td>
              <td>University of Minnesota</td>
              <td>2010</td>
            </tr>
            <tr>
              <td>Asian American Association</td>
              <td>University of Missouri</td>
              <td>2008</td>
            </tr>
          </tbody>
        </table>
        <div className='footerSpace'></div>
      </Page>
    );
  }
}

export default PastAwards;