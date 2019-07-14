import React from 'react';
import { Page } from '../../components';

class Members extends React.Component {
  componentDidMount() {
    document.title = 'Member Schools - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <React.Fragment>
        <Page>
        Membership
The Midwest Asian American Students Union provides resources and support to the Asian Pacific Islander American community and youth. The opportunities for networking, leadership, and personal development through our involvement is invaluable.
Benefits
Leadership Summit and Spring Conference registration rates will be discounted
Gain support from MAASU’s experienced network of leaders in the APIA community about activism and student organization growth.
Network with students and alumni from the 30+ membership schools of MAASU, as well as various professionals and figures from the APIA community.
ETC
For more information on eligibility and benefits, click here or email memoutreach1@gmail.com or memoutreach2@gmail.com.
          {/* last updated 01/14/19 */}
          {/* TODO add links */}
Augsburg College
Ball State University
Case Western Reserve University
Cardinal Stritch University
Central Michigan University
Denison University
Indiana University Purdue University Indianapolis’s (IUPUI)
Kalamazoo College
Kansas State University
Michigan State University
Northwestern University
Northeast Wisconsin Technical College
Notre Dame University
Ohio Northern University
Oklahoma State University
Purdue University at West Lafayette
St. Catherine’s University
St. Louis University
The Ohio State University
University of Colorado Boulder
University of Illinois at Chicago
University of Illinois at Urbana Champaign
University of Kansas
University of Michigan – Ann Arbor
University of Minnesota – Duluth
University of Minnesota Twin Cities
University of Missouri
University of Missouri
University of Nebraska Lincoln
University of Wisconsin – Platteville
University of Wisconsin – Madison
Vanderbilt University
Valparaiso University
Washington University – St Louis
Wichita State University
        </Page>
        <Page>
        For all members schools, they get to select a MAASU Representative. M-Reps, for short,  are the official liaison between member schools and the MAASU Executive Coordinating Committee (ECC). As stated in the MAASU Constitution, each school may only have one M-Rep.
The roles, duties, and responsibilities of the M-Rep consists of the following:
Respond to emails and messages from MAASU Communications chairs or other members of the ECC when necessary
Update his/her/their school’s APIA organization on MAASU information regarding campaigns, conferences, and fundraisers
Has the power to submit one vote for conference bids, ECC elections, and constitutional changes
During the Spring Conference, the M-Rep votes for schools bidding to host Leadership Summit and Spring Conference for the upcoming year
The M-Reps elect the ECC for the upcoming year
If amendments are made to the constitution, the M-Rep has the power to accept or decline the changes
Voting requires a two-thirds attendance in order to reach quorum
M-Reps will miss at least one workshop and possibly one small group meeting during Spring Conference for voting
Connect with fellow M-Rep peers and Communications Chairs
M-Reps will serve a full academic year in conjunction with the Communications Chairs. Should any M-Rep need to step down for any reasons, please have the institution replace the M-Rep and connect them immediately to the Communications Chairs for updates.
        </Page>
        <Page>
        Any school or national organization falling within the Midwest region is eligible to join MAASU as set forth in the bylaws. All authority of MAASU shall ultimately rest in the member schools in conjuncture with the Executive Coordinating Committee.
For any questions about membership please contact our Membership Outreach Chairs at: ecc@maasu.org
Eligibility
MAASU will recognize three forms of membership as outlined:
Campus Organizations: Hereinafter referred to as “member schools.” Membership shall be open to any formally recognized Asian American student organization at an institution of Higher Education. Has voting privileges.
Affiliate Organization Membership: Hereinafter referred to as “affiliates.” Membership shall also be open to any nationally recognized Asian American organization. Must have college student representative in order to have voting privileges.
Prices
1 year membership: $75.00
2 year membership: $140.00
3 year membership: $200.00
Choose for how long you want to be a member below!
MAASU Membership
          {/* TODO paypal for listed membership prices */}
        </Page>
      </React.Fragment>
    );
  }
}

export default Members;