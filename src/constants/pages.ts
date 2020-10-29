import { UPCOMING_ACADEMIC_YEAR } from 'constants/upcoming'

// -----------------------------------------------------
// Purpose
// -----------------------------------------------------

export const PURPOSE_STMT_1 = `
The Midwest Asian Pacific Islander Desi American Students Union
(MAASU) is a 501(c)(3) nonprofit organization that began in response
to a need for political unity among Asian American students in the
Midwest. By 1990, there were more than 20 universities in the
Midwest that had formed Asian Pacific Islander American (APIA)
organizations. Some had been around for years, while others were
still in their infancy.
`

export const PURPOSE_STMT_2 = `
Students felt a need for an organization that would support the
growth of their groups and organize Midwestern Asian American
students for political activism. MAASU works to recognize the needs
of the Asian American community by assisting schools with the
establishment of Asian American student organizations, promoting
leadership among students, addressing educational needs and rights
of the Asian American community, and developing a channel of
communication among Asian American student organizations across the
Midwest.
`

export const PURPOSE_IMG_ALT = `
The first MAASU meeting
`

export const PURPOSE_IMG_CAPTION = `
The first MAASU meeting. Front row (from left to right): Tom Lo (Purdue), Charles Chang (Ohio State), Nancy Kim (Michigan State), name unknown (Miami University), Yeeleng Hang (Michigan State), Jessica Kimura (Michigan State). Second Row: name unknown (Miami Univ.), name unknown (Miami Univ.), John Kim (Miami Univ.), unknown, Wen Hsu (Michigan State), Emily (Oberlin College). Third Row: Allan Lo (Ohio State), Mary Kim (Ohio State), Nimesh Nimesh M. Patel (Michigan State), Mr. Tong (Univ. of Michigan), Joanna Su (Univ of Michigan), Linus Huang (Oberlin College), name unknown (Univ. of Michigan). Photographer was Erika Seo (Ohio State).
`

// -----------------------------------------------------
// Mission
// -----------------------------------------------------

export const MISSION_PRELUDE = `
MAASU strives to recognize the needs of the Asian Pacific Islander
Desi American (APIDA) community by
`

export const MISSION_STMT_1 = `
Promoting leadership among APIDA students through programs
including, but not limited to, the Leadership Retreat, Spring
Conference, and other various programming
`

export const MISSION_STMT_2 = `
Assisting schools with the establishment of APIDA student
organizations, an APIDA cultural center and an Asian American
Studies program
`

export const MISSION_STMT_3 = `
Supporting and encouraging all APIDA students to work toward
social change by providing a forum for social consciousness
`

export const MISSION_STMT_4 = `
Developing and maintaining a channel of communication for APIDA
student organizations in the Midwest through emails, newsletters
and networking
`

export const MISSION_STMT_5 = `
Uniting and strengthening the APIDA community stance against all
forms of oppression
`

// -----------------------------------------------------
// Who We Serve
// -----------------------------------------------------

export const SERVE_STMT_1 = `
Our primary outreach is to undergraduate college students located in
the Midwest region. We are broadening our scope to include high
school students and graduate students.
`

export const SERVE_STMT_2 = `
On average, around 20 colleges and universities are engaged with
MAASU annually spanning the following states: Colorado, Illinois,
Indiana, Iowa, Kansas, Michigan, Minnesota, Missouri, Nebraska,
Tennessee, Oklahoma, Ohio, and Wisconsin.
`

// -----------------------------------------------------
// Strategic Plan
// -----------------------------------------------------

export const STRATEGIC_PLAN_YEARS = '2020-2024'
export const STRATEGIC_PLAN = `
MAASU strives to recognize the needs of its community by developing
a strategic plan for the next few years. See our strategic plan for
${STRATEGIC_PLAN_YEARS}
`

export const STRATEGIC_PLAN_IMG_ALT = `
A preview of the strategic plan.
`

// -----------------------------------------------------
// Board
// -----------------------------------------------------

export const BOARD_PRELUDE = `
MAASU's executive board is divided into four subsections for a
collectively stronger focus on each of the subsections' duties
and roles. These subsections are the executive director, the
executive coordinating committee, the directors council, and the 
board of advisors. Each subsection plays an integral role in the
management of MAASU functions.
`

type AppStatus = {
  isOpen: boolean
  status: string
}

const createBoardAppStatus = (endDate?: string): AppStatus => {
  const isOpen = Boolean(endDate)
  return {
    isOpen,
    status: `applications ${
      isOpen
        ? `for the ${UPCOMING_ACADEMIC_YEAR} 
        academic year are open! Applications 
        close ${endDate}.`
        : 'are currently closed.'
    }`,
  }
}

// insert dates as needed

const edAppStatus = createBoardAppStatus()
const dcAppStatus = createBoardAppStatus()

export const ED_APP_ISOPEN = edAppStatus.isOpen
export const ED_APP_STATUS = `Executive Director ${edAppStatus.status}`

export const DC_APP_ISOPEN = dcAppStatus.isOpen
export const DC_APP_STATUS = `Directors Council ${dcAppStatus.status}`

export const BOA_APP_ISOPEN = false
export const BOA_APP_STATUS = `
Board of Advisors applications are currently closed.
`

export const ECC_APP_ISOPEN = false
export const ECC_APP_STATUS = `
Executive Coordinating Committee applications are currently closed.
`

// -----------------------------------------------------
// Members
// -----------------------------------------------------

export const MEMBERSHIP_PRELUDE = `
The Midwest Asian Pacific Islander Desi American Students 
Union provides resources and support to the Asian Pacific 
Islander Desi American community and youth. The opportunities 
for networking, leadership, and personal development through 
our involvement is invaluable.
`

export const MEMBERSHIP_BENEFITS_1 = `
Conference registration rates will be discounted
`

export const MEMBERSHIP_BENEFITS_2 = `
Gain support from MAASU’s experienced network of leaders in the
APIDA community about activism and student organization growth
`

export const MEMBERSHIP_BENEFITS_3 = `
Network with students and alumni from the member schools of MAASU,
as well as various professionals and prominent figures from the
APIDA community.
`

export const MREP_PRELUDE = `
All members schools will select a MAASU Representative. MReps, for
short, are the official liaison between member schools and the MAASU
Executive Coordinating Committee (ECC). As stated in the MAASU
constitution, each school may only have one MRep. The roles, duties,
and responsibilities of the MRep consists of the following:
`

export const MREP_DUTIES_1 = `
Respond to emails and messages from MAASU Communications chairs or
other members of the ECC when necessary
`

export const MREP_DUTIES_2 = `
Update their school’s APIDA organizations on MAASU
information regarding campaigns, conferences, and fundraisers
`

export const MREP_DUTIES_3 = `
Has the power to submit one vote for conference bids, ECC
elections, and constitutional changes
`
export const MREP_DUTIES_4 = `
Help elect the ECC for the upcoming year
`
export const MREP_DUTIES_5 = `
Has the power to accept or decline amendments made to the
constitution
`

export const MREP_STMT_1 = `
Voting requires a two-thirds attendance in order to reach quorum.
MReps will serve a full academic year in conjunction with the
communications chairs. Should any MRep need to step down for any
reasons, the institution must replace the MRep and connect them
immediately with the communications chairs for updates.
`

export const MREP_STMT_2 = `
Any school or national organization falling within the Midwest
region is eligible to join MAASU as set forth in the bylaws. All
authority of MAASU shall ultimately rest in the member schools in
conjuncture with the Executive Coordinating Committee.
`

export const MEMBERSHIP_ELIGIBILITY_PRELUDE = `
MAASU recognizes the forms of membership as outlined:
`

export const MEMBERSHIP_ELIGIBILITY_STMT_1 = `
Campus Organizations: Hereinafter referred to as "member schools."
Membership shall be open to any formally recognized Asian American
student organization at an institution of Higher Education. Has
voting privileges.
`

export const MEMBERSHIP_ELIGIBILITY_STMT_2 = `
Affiliate Organization Membership: Hereinafter referred to as
"affiliates." Membership shall also be open to any nationally
recognized Asian American organization. Must have college student
representative in order to have voting privileges.
`

// -----------------------------------------------------
// Hxstory
// -----------------------------------------------------

export const HXSTORY_PRELUDE = `
MAASU uses the spelling hxstory instead of history. Traditional history
tends to neglect the wonderful stories and contributions of womxn and 
those who do not gender identify. The x stands for and is inclusive to 
many different identities struggles, and intersectionalities.
`

// -----------------------------------------------------
// Awards
// -----------------------------------------------------

export const AWARDS_STMT = `
MAASU gives out three types of awards at the annual Spring Conference:
the Charles Chang Leadership Award, the Midwestern Star Leadership
Award, and the MAASU Board of Advisors Award. Winners for all awards
are announced annually at the MAASU Spring Conference.
`

export const AWARDS_CC_STMT = `
The Charles Chang Leadership Award was created in 1993 in honor of
the MAASU’s founder Charles Chang. Each academic year, the award
is presented to a student who demonstrates leadership and
dedication to the APIDA community, along with a $250 scholarship 
and plaque.
`

export const AWARDS_CC_STATUS = `
The application is now closed.
`

export const AWARDS_MS_STMT = `
Students nominated for the Midwestern Stars can be anyone who has
made a great impact on their surrounding APIDA community through 
contributions of advisement, programming, leadership, or other 
means that have uplifted a community higher than what has been 
done previously.
`

export const AWARDS_MS_STATUS = `
The application is now closed.
`

export const AWARDS_BOA_STMT = `
The BOA Award is an award that recognizes Asian American student 
organizations that have accomplished greatness on their campus 
and in the Midwest community. The BOA Award and $100 prize is 
presented annually at the MAASU Spring Conference banquet to 
one organization or school.
`

export const AWARDS_BOA_STATUS = `
The application is now closed.
`

// -----------------------------------------------------
// Awards
// -----------------------------------------------------

export const MAASUX_STMT = `
MAASUx is a locally-hosted conference event designed to create 
additional opportunities to engage in community building. MAASUx 
promotes accessibility to educational resources by bringing the 
MAASU experience to you. MAASUx is coordinated with a hosting 
organization on campus, creating leadership opportunities to 
engage students on the campus to create an interactive curriculum. 
It is a free event for participants, designed to attract college 
students from surrounding campuses to participate in a series of 
short, carefully tailored workshops and social activities. Through 
the more intimate setting of MAASUx events, students can engage in 
creating high-quality connections with their peers and have the 
opportunity to reflect on their intersecting identities and 
experiences.
`

// -----------------------------------------------------
// Host
// -----------------------------------------------------

export const HOST_INFO_1 = `
Every fall, MAASU hosts a Leadership Summit, catered to 150-200 students, and every spring, MAASU hosts a Spring Conference, accommodating over 700 attendees. Each conference brings to light the history, challenges, and initiatives that the Asian Pacific Islander Desi American community faces. Each year, these conferences are hosted at different schools, allowing for the students around the Midwest to travel, explore, and gain a further understanding of the resources that their peers have. In addition, each host school showcases the talent of its students and local community through performances, workshops, and keynotes. Each conference closes with a banquet, and the Spring Conference also recognizes particular members in the community.
`

export const HOST_PRELUDE_1 = `
Interested in bringing a MAASU conference to your school? Here are
some guidelines on the bid process to host the next MAASU Leadership
Summit or Spring Conference.
`
export const HOST_1 = `
Bid Packet
`

export const HOST_1_STMT = `
All interested schools are required to create a bid packet. The
purpose of this bid packet is to showcase why the school should
host the conference and provide an overview of the planning
logistics. Bid packets on average are around 20 pages long and
need to include the following sections below:
`

export const HOST_1_1 = `
Title Page
`
export const HOST_1_1_A = `
School Name, Theme, Logo, and Type of Conference (e.g. Leadership Summit)
`
export const HOST_1_2 = `
Table of Contents
`
export const HOST_1_3 = `
School Information
`
export const HOST_1_3_A = `
Background and Location
`
export const HOST_1_3_B = `
APIDA Presence in the Community
`
export const HOST_1_3_C = `
Land Acknowledgement
`
export const HOST_1_4 = `
Conference Theme
`
export const HOST_1_4_A = `
Proposed Theme with Thorough Explanation
`
export const HOST_1_5 = `
Proposed Conference Dates (At Least 3)
`
export const HOST_1_6 = `
Planning Committee Breakdown
`
export const HOST_1_6_A = `
Advisor(s) (Staff or Faculty)
`
export const HOST_1_6_B = `
Chair/Liaison (Co-chairs are not permitted)
`
export const HOST_1_6_C = `
Committee Breakdown
`
export const HOST_1_7 = `
Conference Venues and Fees
`
export const HOST_1_7_A = `
Friday Evening Programming, Registration, 
Opening Ceremony, Workshops, Banquet
`
export const HOST_1_7_B = `
Include capacity/rental fees
`
export const HOST_1_8 = `
Conference Schedule Overview
`
export const HOST_1_9 = `
Keynote Speaker and Entertainment
`
export const HOST_1_9_A = `
At least 3 potential for each, along with quotes for honorarium/cost
`
export const HOST_1_10 = `
  Workshop Ideas, Tracks, and Topics
`
export const HOST_1_11 = `
Proposed Budget
`
export const HOST_1_11_A = `
Example budget
`
export const HOST_1_11_B = `
Estimated revenue needed to break even, max capacity, and expected attendance
`
export const HOST_1_11_C = `
Potential funding source (e.g. school(s), local organizations, corporate sponsors)
`
export const HOST_1_12 = `
Lodging Options
`
export const HOST_1_12_A = `
Include at least three options and list how far away these are from the conference site and banquet venue
`
export const HOST_1_13 = `
Nearby Restaurants
`
export const HOST_1_14 = `
Letters of Support
`
export const HOST_1_14_A = `
Two letters of support on university letterhead with a handwritten or digital signature
`
export const HOST_1_14_A_1 = `
One letter of support from a student affairs department/office
`
export const HOST_1_14_A_2 = `
One letter of support from the planning committee advisor (staff or faculty)
`
export const HOST_2 = `
Bid Presentation
`
export const HOST_2_STMT = `
Bid presentations for all Leadership Summits, Spring and Fall Conferences
will occur during the next MAASU Spring Conference in front of the MAASU 
General Assembly. Up to two representatives can present on behalf of 
each school. Representatives need to prepare a 15 minute PowerPoint 
presentation and provide at least two physical copies of the bid packet. 
After all presentations, the MAASU General Assembly will vote and the 
winning schools will be announced later that evening during the Spring 
Conference banquet.
`
export const HOST_2_CLOSING = `
In order to be considered, the application form must be filled out at 
least a week in advance before the Spring Conference when bid 
presentations will take place.
`

// -----------------------------------------------------
// Donate
// -----------------------------------------------------

export const DONATE_STMT_1 = `
MAASU is a 501(c)(3) nonprofit student run organization. We rely on
community support to continue to aide, educate and connect students
across midwest campuses in leadership development and Asian American
advocacy. It is with your financial support that we are able to
provide students with resources and events that connect our shared
identity.
`

export const DONATE_STMT_2 = `
MAASU believes in empowering students and cultivating strong leaders
within our local communities. Your donation would ensure the
continuation of these programs, such as the Leadership Summit and
Spring/Fall Conferences, and other programs. Please join us in 
supporting young Asian American student leaders by making a tax 
deductible deduction today. Engagement of the younger generation
is more important than ever, and we hope you join us
in cultivating the next generation of leaders.
`

// -----------------------------------------------------
// Alumni
// -----------------------------------------------------

export const MAA_PURPOSE_PRELUDE = `
The MAASU Alumni Association (MAA) is a group for all MAASU alumni.
MAA’s purpose is to continue building and sustaining lifelong
relationships between MAASU and its alumni through the following
ways:
`

export const MAA_PURPOSE_STMT_1 = `
Providing social and career networking for alumni through a MAASU
Alumni Directory
`
export const MAA_PURPOSE_STMT_2 = `
Engaging students as future alumni
`
export const MAA_PURPOSE_STMT_3 = `
Providing alumni opportunities to reconnect with MAASU
`
export const MAA_PURPOSE_STMT_4 = `
Recognize alumni for various accomplishments and service
`
export const MAA_PURPOSE_STMT_5 = `
Potential student travel scholarships to attend MAASU Conferences
`

export const MAA_MEMBERSHIP_FEE = 30

export const MAA_MEMBERSHIP_PRELUDE = `
To become a MAA member, there is a one-time membership fee 
of $${MAA_MEMBERSHIP_FEE} USD. MAA members will then be mailed 
a complementary MAASU Alumni Association wine glass. If you 
are interested in becoming a member of the MAASU Alumni 
Association, please follow these steps:
`

export const MAA_MEMBERSHIP_STMT_1 = `
Fill out the MAASU Alumni Directory Form
`
export const MAA_MEMBERSHIP_STMT_2 = `
Provide a one-time membership payment of 
$${MAA_MEMBERSHIP_FEE} USD
`
export const MAA_MEMBERSHIP_POST = `
After completing these steps, access to the Alumni Directory
will be granted and a MAA wine glass will be mailed to you.
`
