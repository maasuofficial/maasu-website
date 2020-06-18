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

// -----------------------------------------------------
// Board
// -----------------------------------------------------

type AppStatus = {
  isOpen: boolean
  status: string
}

const createBoardAppStatus = (endDate?: string): AppStatus => {
  const isOpen = Boolean(endDate)
  return {
    isOpen,
    status: `Applications ${
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
const boaAppStatus = createBoardAppStatus()
const eccAppStatus = createBoardAppStatus()

export const ED_APP_ISOPEN = edAppStatus.isOpen
export const ED_APP_STATUS = `Executive Director ${edAppStatus.status}`

export const DC_APP_ISOPEN = dcAppStatus.isOpen
export const DC_APP_STATUS = `Directors Council ${dcAppStatus.status}`

export const BOA_APP_ISOPEN = boaAppStatus.isOpen
export const BOA_APP_STATUS = `Board of Advisors ${boaAppStatus.status}`

export const ECC_APP_ISOPEN = eccAppStatus.isOpen
export const ECC_APP_STATUS = `Executive Coordinating Committee ${eccAppStatus.status}`

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
