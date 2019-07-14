import React from 'react';
import { Page, Type } from '../../components';

class MaasuX extends React.Component {
  componentDidMount() {
    document.title = 'MAASUx - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        <Type variant='sub2'>MAASUx</Type>
        <p>
          MAASUx is designed to create additional opportunities to engage in community building
          and promote accessibility to educational resources by bringing the MAASU experience to
          you. MAASUx is coordinated with a hosting organization on campus, creating leadership
          opportunities to engage students on the campus to create an interactive curriculum.
          MAASUx is a free event for participants, designed to attract college students from
          surrounding campuses to participate in a series of short, carefully tailored workshops
          and social activities. Through the more intimate setting of MAASUx events, students can
          engage in creating high-quality connections with their peers and have the opportunity
          to reflect on their intersecting identities and experiences.
        </p>
        <p>
          If your school is interested in hosting a MAASUx, please contact our Programming Chairs
          for more information: ecc@maasu.org
        </p>
        <Type variant='sub2'>Past Host Schools</Type>
October 2018	Butler University l IN (Theme: Breaking the Bamboo Ceiling)	
Wichita State University l KS (Theme: ReModel Minority)
		
April 2017            Kalamazoo College | MI
March 2017         University of Minnesota-Duluth | MN
October 2015       University of Illinois at Urbana-Champaign | IL
                               University of Missouri | MO
January 2015      Ohio State University | OH
October 2014       University of Minnesota-Twin Cities | MN
February 2014     Northwestern University | IL
February 2013     University of Illinois at Urbana-Champaign | IL
February 2012     University of Denver | CO
February 2011      Washington University | MO
                                Loyola University | IL
November 2010   Missouri State University | MO
      </Page>
    );
  }
}

export default MaasuX;