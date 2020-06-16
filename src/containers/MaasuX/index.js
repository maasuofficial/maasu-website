import React from 'react'
import { Page, Type } from '../../components'

class MaasuX extends React.Component {
  componentDidMount() {
    document.title = 'MAASUx - The Midwest Asian American Students Union'
  }

  render() {
    return (
      <React.Fragment>
        <Page>
          <Type variant="h2">MAASUx</Type>
          <p>
            MAASUx is designed to create additional opportunities to engage in
            community building and promote accessibility to educational
            resources by bringing the MAASU experience to you. MAASUx is
            coordinated with a hosting organization on campus, creating
            leadership opportunities to engage students on the campus to create
            an interactive curriculum. MAASUx is a free event for participants,
            designed to attract college students from surrounding campuses to
            participate in a series of short, carefully tailored workshops and
            social activities. Through the more intimate setting of MAASUx
            events, students can engage in creating high-quality connections
            with their peers and have the opportunity to reflect on their
            intersecting identities and experiences.
          </p>
          <p>
            If your school is interested in hosting a MAASUx, please contact our
            programming chairs for more information at{' '}
            <a href="mailto:programming@maasu.org">programming@maasu.org</a>.
          </p>
        </Page>
        <Page>
          <Type variant="h2">Past Host Schools</Type>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>University</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>November 2019</td>
                <td>University of Wisconsin Madison, WI</td>
                <td>Bamboo Among the Oaks</td>
              </tr>
              <tr>
                <td>November 2019</td>
                <td>University of Missouri, MO</td>
                <td>Crossroads and Columns</td>
              </tr>
              <tr>
                <td>October 2018</td>
                <td>Butler University, IN</td>
                <td>Breaking the Bamboo Ceiling</td>
              </tr>
              <tr>
                <td>October 2018</td>
                <td>Wichita State University, KS</td>
                <td>ReModel Minority</td>
              </tr>
              <tr>
                <td>April 2017</td>
                <td>Kalamazoo College, MI</td>
              </tr>
              <tr>
                <td>March 2017</td>
                <td>University of Minnesota-Duluth, MN</td>
              </tr>
              <tr>
                <td>October 2015</td>
                <td>Univeristy of Illinois at Ubrana-Champaign, IL</td>
              </tr>
              <tr>
                <td>October 2015</td>
                <td>University of Missouri, MO</td>
              </tr>
              <tr>
                <td>January 2015</td>
                <td>Ohio State University, OH</td>
              </tr>
              <tr>
                <td>October 2014</td>
                <td>University of Minnesota-Twin Cities, MN</td>
              </tr>
              <tr>
                <td>February 2014</td>
                <td>Northwestern University, IL</td>
              </tr>
              <tr>
                <td>February 2013</td>
                <td>University of Illinois at Urbana-Champaign, IL</td>
              </tr>
              <tr>
                <td>February 2012</td>
                <td>University of Denver, CO</td>
              </tr>
              <tr>
                <td>February 2011</td>
                <td>Washington University, MO</td>
              </tr>
              <tr>
                <td>February 2011</td>
                <td>Loyola University, IL</td>
              </tr>
              <tr>
                <td>November 2010</td>
                <td>Missouri State University, MO</td>
              </tr>
            </tbody>
          </table>
        </Page>
      </React.Fragment>
    )
  }
}

export default MaasuX
