import React, { useState, useEffect } from 'react'
import { ARBox, BImg, Cell, Grid, Page, Type } from '../../components'
import { Icon } from 'components/Icon'
import { EA } from 'components/EmailAnchor'
import data from 'constants/board.json'
import {
  BOA_APP_LINK,
  BOA_APP_ISOPEN,
  BOA_APP_STATUS,
  DC_APP_LINK,
  DC_APP_ISOPEN,
  DC_APP_STATUS,
  ECC_APP_LINK,
  ECC_APP_ISOPEN,
  ECC_APP_STATUS,
  ED_APP_LINK,
  ED_APP_ISOPEN,
  ED_APP_STATUS,
} from 'constants/strings'

export const Board = (props) => {
  const names = Object.values(data).map((i) => i.nameConcatenated)

  const profile = props.location
    ? props.location.pathname.replace('/board', '').replace('/', '')
    : ''

  const [expanded, setExpanded] = useState(names.indexOf(profile) !== -1)

  useEffect(() => {
    document.title =
      'Executive Board - The Midwest Asian American Students Union'
  }, [])

  const generateProfiles = (arr) => {
    return arr.map((p, index) => {
      const isExpProfile =
        p.nameConcatenated.toLowerCase() === profile.toLowerCase()
      const expTabIndex = isExpProfile ? 0 : -1
      const expClasses = isExpProfile ? 'priority-board expanded-board' : ''

      return (
        <Cell key={index} auto sm={6} md={4} lg={3}>
          <ARBox className={'profileContainer-board'} resizeable>
            <a
              href="/"
              tabIndex={expanded ? -1 : 0}
              className={'profileTrigger-board'}
              onClick={toggleExpansion}
              aria-label="profile link"
              aria-expanded={expanded}
            >
              <div className={'profile-board'}>
                <BImg
                  src={`${process.env.PUBLIC_URL}/assets/img/profiles/${p.nameConcatenated}.jpg`}
                  alt={p.name}
                />
                <Type variant="sub5">
                  <span className="fw700">{p.name}</span>
                </Type>
                <span>{p.position}</span>
              </div>
            </a>

            <Page
              className={`posf h-100 w-100 tc z1 profileInfo-board ${expClasses}`}
              name={p.nameConcatenated}
            >
              <Type variant="h2">{p.name}</Type>

              <a
                href="/"
                tabIndex={expTabIndex}
                className={'posa t-0 r-0 ma3 fs2 z5 c-text-main'}
                onClick={toggleContraction}
              >
                <Icon icon="arrow-left" />
              </a>

              <BImg
                src={`${process.env.PUBLIC_URL}/assets/img/profiles/${p.nameConcatenated}.jpg`}
                className="w-100-s w-50-ns mxa"
                alt={p.name}
              />
              <br />
              <Type variant="text3">
                <span className="fw700">{p.position}</span>
              </Type>
              <br />

              {p.email && <EA tabIndex={expTabIndex}>{p.email}</EA>}

              {p.positionRole && <p className="tl">{p.positionRole}</p>}
            </Page>
          </ARBox>
        </Cell>
      )
    })
  }
  const [profileInfo, setProfileInfo] = useState()

  useEffect(() => {
    if (profileInfo) {
      // add class in callback or else rerender will overwrite added classes
      if (expanded) {
        profileInfo.classList.add('priority-board', 'expanded-board')
        const unfocusedElems = profileInfo.querySelectorAll('[tabIndex="-1"]')
        unfocusedElems.forEach((el) => el.setAttribute('tabIndex', '0'))
      } else {
        profileInfo.classList.remove('priority-board', 'expanded-board')
        const unfocusedElems = profileInfo.querySelectorAll('[tabIndex="0"]')
        unfocusedElems.forEach((el) => el.setAttribute('tabIndex', '-1'))
      }
    }
  }, [expanded, profileInfo])

  const toggleExpansion = (e) => {
    e.preventDefault()
    setProfileInfo(e.currentTarget.nextSibling)
    setExpanded(true)
  }

  const toggleContraction = (e) => {
    e.preventDefault()
    setProfileInfo(e.currentTarget.parentNode)
    setExpanded(false)
  }

  const groups = data.reduce((acc, val) => {
    const key = val.type

    if (!acc[key]) acc[key] = []

    acc[key].push(val)
    return acc
  }, {})

  return (
    <div
      className={`pt6 pageContainer-board ${expanded ? 'expanded-board' : ''}`}
    >
      <Page className={'groupPage-board'}>
        <Type variant="h2">Executive Coordinating Committee</Type>
        <Grid>{generateProfiles(groups.ECC)}</Grid>
        <p>
          {ECC_APP_STATUS}
          {ECC_APP_ISOPEN ? <a href={ECC_APP_LINK}>Apply here.</a> : null}
        </p>
      </Page>
      <Page className={'groupPage-board'}>
        <Type variant="h2">Executive Director</Type>
        <Grid>{generateProfiles(groups.ED)}</Grid>
        <p>
          {ED_APP_STATUS}
          {ED_APP_ISOPEN ? <a href={ED_APP_LINK}>Apply here.</a> : null}
        </p>
      </Page>
      <Page className={'groupPage-board'}>
        <Type variant="h2">Directors Council</Type>
        <Grid>{generateProfiles(groups.DC)}</Grid>
        <p>
          {DC_APP_STATUS}
          {DC_APP_ISOPEN ? <a href={DC_APP_LINK}>Apply here.</a> : null}
        </p>
      </Page>
      <Page className={'groupPage-board'}>
        <Type variant="h2">Board of Advisors</Type>
        <Grid>{generateProfiles(groups.BOA)}</Grid>
        <p>
          {BOA_APP_STATUS}
          {BOA_APP_ISOPEN ? <a href={BOA_APP_LINK}>Apply here.</a> : null}
        </p>
      </Page>
    </div>
  )
}

export default Board
