import React, { FC, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { connect, ConnectedProps } from 'react-redux'
import { AppState } from 'store/types'
import { BoardMember } from 'store/Board/types'
import { useDocumentTitle } from 'hooks/meta'
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
import { SkeletonProvider, SkeletonConsumer } from 'components/Skeleton'
import { BoardMemberProfile } from 'components/BoardMemberProfile'

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

  type GroupsType = {
    [key: string]: BoardMember[]
    ED: BoardMember[]
    ECC: BoardMember[]
    DC: BoardMember[]
    BOA: BoardMember[]
  }

  const initialGroups: GroupsType = {
    ED: [],
    ECC: [],
    DC: [],
    BOA: [],
  }
  const groups = board.reduce((acc, val) => {
    acc[val.positionType].push(val)
    return acc
  }, initialGroups)

  return (
    <SkeletonProvider isLoading={isFetchingBoard}>
      <div className="container pt6">
        <section className="mb4">
          <h4 className="title4">Executive Board</h4>
          <span>{BOARD_PRELUDE}</span>
        </section>

        <section>
          <h5 className="title5">Executive Director</h5>
          <SkeletonConsumer width={256} height={256}>
            <div className="df fw-w gridX">
              {groups.ED.map((m, i) => (
                <BoardMemberProfile key={i} member={m} />
              ))}
            </div>
          </SkeletonConsumer>
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
            <div className="df fw-w gridX">
              {groups.ECC.map((m, i) => (
                <BoardMemberProfile key={i} member={m} />
              ))}
            </div>
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
            <div className="df fw-w gridX">
              {groups.DC.map((m, i) => (
                <BoardMemberProfile key={i} member={m} />
              ))}
            </div>
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
            <div className="df fw-w gridX">
              {groups.BOA.map((m, i) => (
                <BoardMemberProfile key={i} member={m} />
              ))}
            </div>
          )}
          <p className="my4">
            {BOA_APP_STATUS}
            {BOA_APP_ISOPEN ? <a href={BOA_APP_LINK}>Apply here.</a> : null}
          </p>
        </section>
      </div>
    </SkeletonProvider>
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
