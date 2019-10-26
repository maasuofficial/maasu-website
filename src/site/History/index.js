import React from 'react';
import { Page, Time, Timeline, TDesc, TSub, TTitle, Type } from '../../components';

class History extends React.Component {
  componentDidMount() {
    document.title = 'History - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        <Type variant='sub2'>Our History</Type>

        <Timeline>
          <Time label={1989}>
            <TTitle>First organized meeting for MAASU</TTitle>
            <TSub>October | Granville, Ohio</TSub>
            <TDesc>
              20 people attended this meeting from 6 schools and one community organization. 
              The schools represented were as followed: Miami University, Michigan State University,
              Oberlin College, Ohio State University, Purdue University, and the University of Michigan.
              The community organization was the American Citizens for Justice (ACJ). This was a one-day
              meeting to discuss whether or not there was a need to start an organization to unite Asian
              American student organizations in the Midwest.
            </TDesc>
          </Time>
          <Time label={1990}>
            <TTitle>MAASU is incorporated in the state of Ohio</TTitle>
            <TSub>June</TSub>
            <TDesc>
              Articles of incorporation are submitted and approved in 1990. Charles Chang is established
              as the statutory agent.
            </TDesc>
            <TTitle>Purdue Asian American Students/MAASU Joint Conference</TTitle>
            <TSub>October | Purdue University, West Lafayette, IN</TSub>
            <TDesc>
              The first group of officers is formed. At this conference, MAASU held two workshops–one on
              leadership and the other an informational for the organization. 14 schools attended.
            </TDesc>
          </Time>
          <Time label={1991}>
            <TTitle>Midwest Asian American Conference</TTitle>
            <TSub>March | University of Illinois at Urbana-Champaign</TSub>
            <TDesc>
              MAASU held an informational session during which structure and officer positions were discussed.
              Elections were held and an interim ECC was elected.
            </TDesc>
            <TTitle>Spring Conference</TTitle>
            <TSub>April | University of Michigan, Ann Arbor, MI</TSub>
            <TDesc>
              ECC meets to discuss plans for the upcoming year. 
            </TDesc>
            <TTitle>ECC Retreat</TTitle>
            <TSub>September | University of Illinoise at Urbana-Champaign</TSub>
            <TDesc>
              During this retreat, a Constitution is established.
            </TDesc>
            <TTitle>Leadership Retreat</TTitle>
            <TSub>October | Purdue University, West Lafayette, IN</TSub>
            <TDesc>
              During the first-ever LR, the first roll call is completed. 11 schools attended.
            </TDesc>
          </Time>
          <Time label={1992}>
            <TTitle>MAASU granted tax-exempt status</TTitle>
            <TSub>April</TSub>
            <TDesc>MAASU is granted conditional tax-exempt status. Papers are filed with the IRS in Cincinnati, OH.</TDesc>
            <TTitle>Spring Conference</TTitle>
            <TSub>April | University of Illinoise at Urbana-Champaign</TSub>
            <TDesc>
              This is the first conference that MAASU had equal partnership in creating an agenda for the conference.
              The ECC met with the Asian American Association of UIUC in January to plan for the event. The first
              election and transition of the ECC and Director occurs.
            </TDesc>
            <TTitle>Board of Advisors Meeting</TTitle>
            <TSub>October | Chicago, IL</TSub>
            <TDesc>
              Five board members, the Directors, and the ECC Chair attend the first BOA meeting.
            </TDesc>
          </Time>
          <Time label={1993}>
            <TTitle>Spring Conference</TTitle>
            <TSub>April | The Ohio State University, Columbus, OH</TSub>
            <TDesc>The 2nd generation of ECC is elected.</TDesc>
            <TTitle>MAASU Leadership Retreat</TTitle>
            <TSub>October 29-31 | Northern Illinois University, DeKalb, IL</TSub>
          </Time>
          <Time label={1994}>
            <TTitle>Spring Conference</TTitle>
            <TSub>April 8-10 | University of Michigan, Ann Arbor, MI</TSub>
            <TDesc>The 3rd generation of ECC is elected.</TDesc>
            <TTitle>Leadership Retreat</TTitle>
            <TSub>October 28-30 | Northwestern University, Evanston, IL</TSub>
          </Time>
          <Time label={1995}>
            <TTitle>Spring Conference</TTitle>
            <TSub>March 23-25 | University of Illinois at Urbana-Champaign</TSub>
            <TDesc>The 4th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Retreat</TTitle>
            <TSub>Novermber 17-19 | Notre Dame, South Bend, IN</TSub>
          </Time>
          <Time label={1996}>
            <TTitle>Spring Conference</TTitle>
            <TSub>April 4-7 | Indiana University, Bloomington, IN</TSub>
            <TDesc>The 5th generation fo ECC is elected.</TDesc>
            <TTitle>Leadership Retreat</TTitle>
            <TSub>November 8-10 | Washington University, St. Louis, MO</TSub>
          </Time>
          <Time label={1997}>
            <TTitle>Spring Conference</TTitle>
            <TSub>April 10-13 | Northwestern University, Evanston, IL</TSub>
            <TDesc>The 6th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Retreat</TTitle>
            <TSub>October 31 | The Ohio State University, Columbus, OH</TSub>
          </Time>
          <Time label={1998}>
            <TTitle>Spring Conference</TTitle>
            <TSub>April 2-5 | University of Michigan, Ann Arbor, MI</TSub>
            <TDesc>The 7th generation of ECC is elected.</TDesc>
          </Time>
          <Time label={1999}>
            <TTitle>Organizational Meeting</TTitle>
            <TSub>April 10 | The Ohio State University, Columbus, OH</TSub>
            <TDesc>The 8th generation fo ECC is elected.</TDesc>
          </Time>
          <Time label={2000}>
            <TTitle>Spring Conference</TTitle>
            <TSub>April 6-8 | University of Minnesota-Twin Cities</TSub>
            <TDesc>The 9th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Retreat</TTitle>
            <TSub>October 20-22 | Grand Valley State University, Allendale, MI</TSub>
          </Time>
          <Time label={2001}>
            <TTitle>Spring Conference</TTitle>
            <TSub>March 22-25 | University of Michigan, Ann Arbor, MI</TSub>
            <TDesc>The 10th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Retreat</TTitle>
            <TSub>October 10-19 | Loyola University, Chicago, IL</TSub>
          </Time>
          <Time label={2002}>
            <TTitle>Spring Conference</TTitle>
            <TSub>February 15-17 | University of Illinois, Urbana-Champaign, IL</TSub>
            <TDesc>The 11th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Retreat</TTitle>
            <TSub>Novermber 8-10 | Ball State University, Muncie, IN</TSub>
          </Time>
          <Time label={2003}>
            <TTitle>Spring Conference</TTitle>
            <TSub>April 3-6 | Indiana University, Bloomington, IN</TSub>
            <TDesc>The 12th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Retreat</TTitle>
            <TSub>November 7-9 | Northern Illinois University, DeKalb, IL</TSub>
          </Time>
          <Time label={2004}>
            <TTitle>Spring Conference</TTitle>
            <TSub>April 1-3 | University of Wisconsin, Madison, WI</TSub>
            <TDesc>The 13th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Retreat</TTitle>
            <TSub>November 5-6 | University of Missouri, Colombia, MO</TSub>
          </Time>
          <Time label={2005}>
            <TTitle>Spring Conference</TTitle>
            <TSub>April 1-3 | Universiy of Michigan, Ann Arbor, MI</TSub>
            <TDesc>The 14th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Retreat</TTitle>
            <TSub>November 4-5 | Michigan State University, East Lansing, MI</TSub>
          </Time>
          <Time label={2006}>
            <TTitle>Spring Conference</TTitle>
            <TSub>April 1-3 | The Ohio State University, Columbus, OH</TSub>
            <TDesc>The 15th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Retreat</TTitle>
            <TSub>November 10-12 | Eastern Illinois University, Charleston, IL</TSub>
          </Time>
          <Time label={2007}>
            <TTitle>Spring Conference</TTitle>
            <TSub>March 9-11 | University of Illinois, Urbana-Champaign, IL</TSub>
            <TDesc>The 16th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Retreat</TTitle>
            <TSub>November 2-4 | Denison University, Granville, OH</TSub>
          </Time>
          <Time label={2008}>
            <TTitle>Spring Conference</TTitle>
            <TSub>March 28-30 | University of Kansas, Lawrence, KS</TSub>
            <TDesc>The 17th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Retreat</TTitle>
            <TSub>November 14-16 | University if Missouri, Colombia, MO</TSub>
          </Time>
          <Time label={2009}>
            <TTitle>Spring Conference</TTitle>
            <TSub>April 3-5 | University of Michigan, Ann Arbor, MI</TSub>
            <TDesc>The 18th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Retreat</TTitle>
            <TSub>November 6-7 | University of Wisconsin, Whitewater, WI</TSub>
          </Time>
          <Time label={2010}>
            <TTitle>Spring Conference</TTitle>
            <TSub>April 9-10 | The Ohio State University, Columbus, OH</TSub>
            <TDesc>The 19th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Retreat</TTitle>
            <TSub>October 29-30 | Augsburg College, Minneapolis, MN</TSub>
          </Time>
          <Time label={2011}>
            <TTitle>Spring Conference</TTitle>
            <TSub>April 8-9 | University of Minnesota-Twin Cities, MN</TSub>
            <TDesc>The 20th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Retreat</TTitle>
            <TSub>November 4-5 | University of Illinois, Chicago, IL</TSub>
          </Time>
          <Time label={2012}>
            <TTitle>Spring Conference</TTitle>
            <TSub>April 6-7 | University of Illinois, Urbana-Champaign, IL</TSub>
            <TDesc>The 21st generation of ECC is elected.</TDesc>
          </Time>
          <Time label={2013}>
            <TTitle>Spring Conference</TTitle>
            <TSub>April 5-6 | University of Michigan, Ann Arbor, MI</TSub>
            <TDesc>The 22nd generation of ECC is elected.</TDesc>
            <TTitle>Leadership Retreat</TTitle>
            <TSub>October 25-26 | Miami University, Oxford, OH</TSub>
          </Time>
          <Time label={2014}>
            <TTitle>Spring Conference <i>Reimagine</i></TTitle>
            <TSub>March 28-29 | The Ohio State University, Columbus, OH</TSub>
            <TDesc>The 23rd generation of ECC is elected.</TDesc>
            <TTitle>Leadership Retreat <i>Sail to New Horizons: Discover, Explore, Dream</i></TTitle>
            <TSub>November 14-15 | University of Missouri, Columbia, MO</TSub>
          </Time>
          <Time label={2015}>
            <TTitle>Spring Conference</TTitle>
            <TSub>April 10-11 | University of Wisconsin, Madison, WI</TSub>
            <TDesc>The 24th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Summit <i>Footsteps: What's Your Imprint</i></TTitle>
            <TSub>November 20-21 | Purdue University, West Lafayette, IN</TSub>
          </Time>
          <Time label={2016}>
            <TTitle>Spring Conference <i>Generation A</i></TTitle>
            <TSub>April 15-16 | University of Minnesota-Twin Cities, MN</TSub>
            <TDesc>The 25th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Summit <i>Journey to the Center</i></TTitle>
            <TSub>November 11-16 | Northwestern University, Evanston, IL</TSub>
          </Time>
          <Time label={2017}>
            <TTitle>Spring Conference <i>#UnitedWeStand</i></TTitle>
            <TSub>April 7-8 | University of Michigan, MI</TSub>
            <TDesc>The 26th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Summit <i>Timeless</i></TTitle>
            <TSub>October 27-28 | University of Missouri, Columbia, MO</TSub>
          </Time>
          <Time label={2018}>
            <TTitle>MAASU is incorporated in the state of Illinois</TTitle>
            <TSub>April</TSub>
            <TDesc>Articles of incorporation are submitted and approved in 2018.</TDesc>
            <TTitle>Spring Conference <i>Overcome</i></TTitle>
            <TSub>April 23-24 | The Ohio State University, Columbus, OH</TSub>
            <TDesc>The 27th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Summit <i>Impact</i></TTitle>
            <TSub>November 16-17 | Michigan State University, East Lansing, MI</TSub>
          </Time>
          <Time label={2019}>
            <TTitle>MAASU granted federal tax-exempt status</TTitle>
            <TSub>January</TSub>
            <TDesc>MAASU is granted federal 501c3 tax-exempt status.</TDesc>
            <TTitle>Spring Conference <i>Be Bolder</i></TTitle>
            <TSub>March 8-9 | University of Colorado - Boulder, Boulder, CO</TSub>
            <TDesc>The 28th generation of ECC is elected.</TDesc>
            <TTitle>Leadership Summit <i>Take Flight</i></TTitle>
            <TSub>October 18-19 | Wichita State University, Wichita, KS</TSub>
            <TTitle>Spring Conference <i>Unwritten</i></TTitle>
            <TSub>March 20-22 | University of Minnesota-Twin Cities, MN</TSub>
          </Time>
        </Timeline>
      </Page>
    );
  }
}

export default History;