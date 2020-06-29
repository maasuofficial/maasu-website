import React, { FC, useEffect } from 'react'
import { RouteComponentProps, Link } from '@reach/router'
import { connect, ConnectedProps } from 'react-redux'
import { AppState } from 'store/types'
import { BoardMember } from 'store/Board/types'
import { useDocumentTitle } from 'hooks/meta'
import { ARBox, BImg, Cell, Grid } from 'components'
import { getIsFetchingBoard, getBoard, getBoardError } from 'store/selectors'
import { fetchBoard } from 'store/actions'
import {
  BOARD_PRELUDE,
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

type Props = RouteComponentProps & ReduxProps & {}

export const Board: FC<Props> = ({
  fetchBoard,
  isFetchingBoard,
  board,
  boardError,
}) => {
  useDocumentTitle('Executive Board')

  useEffect(() => {
    if (board && !board.length && !boardError) {
      fetchBoard()
    }
  }, [board, fetchBoard, boardError])

  const generateProfiles = (arr: BoardMember[]) => {
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

  type GroupsType = {
    ED: BoardMember[]
    ECC: BoardMember[]
    DC: BoardMember[]
    BOA: BoardMember[]
  }

  const groups: GroupsType = {
    ED: board.filter((i) => i.positionType === 'ED'),
    ECC: board.filter((i) => i.positionType === 'ECC'),
    DC: board.filter((i) => i.positionType === 'DC'),
    BOA: board.filter((i) => i.positionType === 'BOA'),
  }

  return (
    <div className="container pt6">
      <section className="mb4">
        <h4 className="title4">Executive Board</h4>
        <span>{BOARD_PRELUDE}</span>
      </section>

      <section>
        <h5 className="title5">Executive Director</h5>
        {isFetchingBoard ? (
          <span>loading...</span>
        ) : (
          <Grid>{generateProfiles(groups.ED)}</Grid>
        )}
        <p className="my4">
          {ED_APP_STATUS}
          {ED_APP_ISOPEN ? <a href={ED_APP_LINK}>Apply here.</a> : null}
        </p>
      </section>

      <hr className="w-100 my4" />

      <section>
        <h5 className="title5">Executive Coordinating Committee</h5>
        {isFetchingBoard ? (
          <span>loading...</span>
        ) : (
          <Grid>{generateProfiles(groups.ECC)}</Grid>
        )}
        <p className="my4">
          {ECC_APP_STATUS}
          {ECC_APP_ISOPEN ? <a href={ECC_APP_LINK}>Apply here.</a> : null}
        </p>
      </section>

      <hr className="w-100 my4" />

      <section>
        <h5 className="title5">Directors Council</h5>
        {isFetchingBoard ? (
          <span>loading...</span>
        ) : (
          <Grid>{generateProfiles(groups.DC)}</Grid>
        )}
        <p className="my4">
          {DC_APP_STATUS}
          {DC_APP_ISOPEN ? <a href={DC_APP_LINK}>Apply here.</a> : null}
        </p>
      </section>

      <hr className="w-100 my4" />

      <section>
        <h5 className="title5">Board Of Advisors</h5>
        {isFetchingBoard ? (
          <span>loading...</span>
        ) : (
          <Grid>{generateProfiles(groups.BOA)}</Grid>
        )}
        <p className="my4">
          {BOA_APP_STATUS}
          {BOA_APP_ISOPEN ? <a href={BOA_APP_LINK}>Apply here.</a> : null}
        </p>
      </section>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  isFetchingBoard: getIsFetchingBoard(state),
  board: getBoard(state),
  boardError: getBoardError(state),
})

const mapDispatchToProps = {
  fetchBoard,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

export const BoardContainer = connector(Board)
