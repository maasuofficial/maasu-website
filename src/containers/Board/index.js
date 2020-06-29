import React, { useEffect } from 'react'
import { Link } from '@reach/router'
import { ARBox, BImg, Cell, Grid, Page, Type } from '../../components'
import data from 'constants/cache/board.json'
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
  useEffect(() => {
    document.title =
      'Executive Board - The Midwest Asian American Students Union'
  }, [])

  const generateProfiles = (arr) => {
    return arr.map((p, index) => {
      const name = p.alias || `${p.fname} ${p.mname} ${p.lname}`

      return (
        <Cell key={index} auto sm={6} md={4} lg={3}>
          <ARBox resizeable>
            <Link to={`/board/${p.id}`} className="c-inh tdn">
              <div className="w-100 h-100 pa2 tc profile-board">
                <BImg src={p.imageUrl} alt={name} />
                <p className="ma0 fw700">{name}</p>
                <span>{p.positionTitle}</span>
              </div>
            </Link>
          </ARBox>
        </Cell>
      )
    })
  }

  const groups = data
    .filter((i) => i.id && i.id.length > 0)
    .reduce((acc, val) => {
      const key = val.positionType

      if (!acc[key]) acc[key] = []

      acc[key].push(val)
      return acc
    }, {})

  return (
    <div className="container pt6">
      <Page>
        <Type variant="h2">Executive Coordinating Committee</Type>
        <Grid>{generateProfiles(groups.ECC)}</Grid>
        <p>
          {ECC_APP_STATUS}
          {ECC_APP_ISOPEN ? <a href={ECC_APP_LINK}>Apply here.</a> : null}
        </p>
      </Page>
      <hr className="w-100" />
      <Page>
        <Type variant="h2">Executive Director</Type>
        <Grid>{generateProfiles(groups.ED)}</Grid>
        <p>
          {ED_APP_STATUS}
          {ED_APP_ISOPEN ? <a href={ED_APP_LINK}>Apply here.</a> : null}
        </p>
      </Page>
      <hr className="w-100" />
      <Page>
        <Type variant="h2">Directors Council</Type>
        <Grid>{generateProfiles(groups.DC)}</Grid>
        <p>
          {DC_APP_STATUS}
          {DC_APP_ISOPEN ? <a href={DC_APP_LINK}>Apply here.</a> : null}
        </p>
      </Page>
      <hr className="w-100" />
      <Page>
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
