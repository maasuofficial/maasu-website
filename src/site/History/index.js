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
          </Time>
          <Time label={1991}>
            <TTitle>MAASU Conference</TTitle>
            <TSub>April | University of Michigan, Ann Arbor, MI</TSub>
            <TDesc>
              ECC meets to discuss plans for the upcoming year. 
            </TDesc>
            <TTitle>MAASU ECC Retreat</TTitle>
            <TSub>September | University of Illinoise at Urbana-Champaign</TSub>
            <TDesc>
              During this retreat, a Constitution is established.
            </TDesc>
            <TTitle>MAASU Leadership Retreat</TTitle>
            <TSub>October | Purdue University, West Lafayette, IN</TSub>
            <TDesc>
              During the first-ever LR, the first roll call is completed. 11 schools attended.
            </TDesc>
          </Time>
        </Timeline>

        {/*
        <Time label={}>
          <TTitle>
          </TTitle>
          <TSub>
          </TSub>
          <TDesc>
          </TDesc>
        </Time>
        */} 
 
MAASU granted tax-exempt status | April 1992  
MAASU is granted conditional tax-exempt status. Papers are filed with the IRS in Cincinnati, OH.  
 
MAASU Conference | April 1992 | University of Illinois at Urbana-Champaign  
This is the first conference that MAASU had equal partnership in creating an agenda for the conference. The ECC met with the Asian American Association of UIUC in January to plan for the event. The first election and transition of the ECC and Director occurs.  
 
MAASU Board of Advisors Meeting | October 1992 | Chicago, IL  
Five board members, the Directors, and the ECC Chair attend the first BOA meeting   

MAASU Conference | April 1993 | The Ohio State University, Columbus, OH  
 
The 2nd generation of ECC is elected  
MAASU Leadership Retreat | October 29-31, 1993 | Northern Illinois University, DeKalb, IL  MAASU Spring Conference | April 8-10, 1994 | University of Michigan, Ann Arbor, MI  
 
The 3rd generation of ECC is elected 
MAASU Leadership Retreat | October 28-30, 1994 | Northwestern University, Evanston, IL  
MAASU Spring Conference | March 23-25, 1995 | University of Illinois at Urbana-Champaign  
 
The 4th generation of ECC is elected 
MAASU Leadership Retreat | November 17-19, 1995 | Notre Dame, South Bend, IN  MAASU Spring Conference | April 4-7, 1996 | Indiana University, Bloomington, IN  
 
The 5th generation of ECC is elected 
MAASU Leadership Retreat | November 8-10, 1996 | Washington University, St. Louis, MO  MAASU Spring Conference | April 10-13, 1997 | Northwestern University, Evanston, IL  
 
The 6th generation of ECC is elected 
MAASU Leadership Retreat | October 31 1997 | The Ohio State University, Columbus, OH  MAASU Spring Conference | April 2-5, 1996 | University of Michigan, Ann Arbor, MI  
 
The 7th generation of ECC is elected 
MAASU Organizational Meeting | April 10, 1999 | The Ohio State University, Columbus, OH  
 
The 8th generation of ECC is elected 
MAASU Spring Conference | April 6-8, 2000 | University of Minnesota-Twin Cities  
 
The 9th generation of ECC is elected 
MAASU Leadership Retreat | October 20-22, 2000 | Grand Valley State University, Allendale, MI  MAASU Spring Conference | March 22-25, 2001 | University of Michigan, Ann Arbor, MI  
 
The 10th generation of ECC is elected  
MAASU Leadership Retreat | October 10-19, 2001 | Loyola University, Chicago, IL  
MAASU Spring Conference | February 15-17, 2002 | University of Illinois, Urbana-Champaign, IL  
 
The 11th generation of ECC is elected  
MAASU Leadership Retreat | November 8-10, 2002 | Ball State University, Muncie, Indiana  MAASU Spring Conference | April 3-6, 2003 | Indiana University, Bloomington, IN 15  
 
The 12th generation of ECC is elected  
MAASU Leadership Retreat | November 7-9, 2003 | Northern Illinois University, DeKalb, IL  MAASU Spring Conference | April 1-3, 2004 | University of Wisconsin, Madison, WI  
 
The 13th generation of ECC is elected  
MAASU Leadership Retreat | November 5-6, 2004 | University of Missouri, Columbia, MO  MAASU Spring Conference | April 1-3, 2005 | University of Michigan, Ann Arbor, MI  
 
The 14th generation of ECC is elected  
MAASU Leadership Retreat | November 4-5, 2005 | Michigan State University, East Lansing, MI  MAASU Spring Conference | April 1-3, 2006 | The Ohio State University, Columbus, OH  
 
The 15th generation of ECC is elected  
MAASU Leadership Retreat | November 10-12, 2006 | Eastern Illinois University, Charleston, IL  MAASU Spring Conference | March 9-11, 2007 | University of Illinois, Urbana-Champaign, IL  
 
The 16th generation of ECC is elected  
MAASU Leadership Retreat | November 2-4, 2007 | Denison University, Granville, OH  
MAASU Spring Conference | March 28-30, 2008| University of Kansas, Lawrence, KS  
 
The 17th generation of ECC is elected  
MAASU Leadership Retreat | November 14-16, 2008 | University of Missouri, Columbia, MO  
MAASU Spring Conference | April 3-5, 2009 |University of Michigan, Ann Arbor, MI  
 
The 18th generation of ECC is elected  
MAASU Leadership Retreat | November 6-7, 2009 | University of Wisconsin, Whitewater, WI  
MAASU Spring Conference | April 9-10, 2010 | Ohio State University, Columbus, OH  
 
The 19th generation of ECC is elected  
MAASU Leadership Retreat | October 29-30, 2010 | Augsburg College, Minneapolis MN  
MAASU Spring Conference | April 8-9, 2011 | University of Minnesota-Twin Cities, MN 
 
The 20th generation of ECC is elected  
MAASU Leadership Retreat | November 4-5, 2011 | University of Illinois, Chicago, IL  
MAASU Spring Conference | April 6-7, 2012 | University of Illinois, Urbana-Champaign, IL  
 
The 21st generation of ECC is elected  
MAASU Spring Conference | April 5-6, 2013 | University of Michigan, Ann Arbor, MI 
 
The 22nd generation of ECC is elected 
MAASU Leadership Retreat l October 25-26, 2013 l Miami University, Oxford, OH 
MAASU Spring Conference “Reimagine” l March 28-29, 2014 l The Ohio State University, Columbus, OH 
 
The 23rd generation of ECC is elected 
MAASU Leadership Retreat “Sail to New Horizons: Discover, Explore, Dream” l November 14-15, 2014 l University of Missouri, Columbia, MO 
MAASU Spring Conference l April 10-11, 2015 l University of Wisconsin, Madison, WI 

The 24th generation of ECC is elected 
MAASU Leadership Summit “Footsteps: What’s Your Imprint” l November 20-21, 2015 l Purdue University, West Lafayette, IN 
MAASU Spring Conference “Generation A” l April 15-16, 2016 l University of Minnesota-Twin Cities, MN

The 25th generation of ECC is elected (2016-2017) 
MAASU Leadership Summit “Journey to the Center” l November 11-16, 2016 l Northwestern University, Evanston, IL
MAASU Spring Conference “#UnitedWeStand" l April 7-8, 2017 l University of Michigan, MI

The 26th generation of ECC is elected (2017-2018) 
MAASU Leadership Summit “Timeless” l October 27-28, 2017 l University of Missouri, Columbia, MO
MAASU Spring Conference “Overcome” l April 23-24, 2018 l The Ohio State University, Columbus, OH

The 27th generation of ECC is elected (2018-2019) 
MAASU Leadership Summit “Impact” l November 16-17, 2018 l Michigan State University, East Lansing, MI
MAASU Spring Conference “Be Bolder” l March 8-9, 2019 l University of Colorado - Boulder, Boulder, CO

MAASU is incorporated in the state of Illinois| April 2018
Articles of incorporation are submitted and approved in 2018. 

MAASU granted federal tax-exempt status | January 2019 
MAASU is granted federal 501c3 tax-exempt status. 

The 28th generation of ECC is elected (2019-2020) 
MAASU Leadership Summit l Date TBD l Wichita State University, Wichita, KS
MAASU Spring Conference l Date TBD l University of Minnesota-Twin Cities, MN

      </Page>
    );
  }
}

export default History;