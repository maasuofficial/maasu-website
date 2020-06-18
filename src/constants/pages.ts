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
