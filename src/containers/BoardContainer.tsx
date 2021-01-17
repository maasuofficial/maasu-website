import React, { FC, Fragment, useEffect } from 'react'
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
  ED_APP_STATUS_OPEN,
  ED_APP_STATUS_CLOSED,
} from 'constants/strings'
import { A } from 'components/Link'
import { Container } from 'components/Container'
import { TextBlock } from 'components/TextBlock'
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

  const renderProfileSkeletons = (num: number) =>
    [...Array(num)].map((_, i) => (
      <div key={i} className={`${isFetchingBoard ? 'pa2' : ''} tc`}>
        <SkeletonConsumer width={256} height={256} />
        <SkeletonConsumer width={120} height={19} className="my1 mxa" />
        <SkeletonConsumer width={150} height={19} className="my1 mxa" />
      </div>
    ))

  const numSkeletonED = 1
  const numSkeletonECC = 7
  const numSkeletonDC = 3
  const numSkeletonBOA = 2

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
      <Container>
        <TextBlock title="Executive Board">
          <span>{BOARD_PRELUDE}</span>
        </TextBlock>

        <section>
          <h5 className="title5 tc my2">Executive Coordinating Committee</h5>
          <div className="df fw-w jc-c">
            {groups.ECC.map((m, i) => (
              <BoardMemberProfile key={i} member={m} />
            ))}
            {renderProfileSkeletons(numSkeletonECC)}
          </div>
          <p className="my4 tc">
            {ECC_APP_STATUS}
            {ECC_APP_ISOPEN ? <A href={ECC_APP_LINK}>Apply here.</A> : null}
          </p>
        </section>

        <hr className="w-100 my4" />

        <section>
          <h5 className="title5 tc my2">Directors Council</h5>
          <div className="df fw-w jc-c">
            {renderProfileSkeletons(numSkeletonDC)}
            {groups.DC.map((m, i) => (
              <BoardMemberProfile key={i} member={m} />
            ))}
          </div>
          <p className="my4 tc">
            {DC_APP_STATUS}
            {DC_APP_ISOPEN ? <A href={DC_APP_LINK}>Apply here.</A> : null}
          </p>
        </section>

        <hr className="w-100 my4" />

        <section>
          <h5 className="title5 tc my2">Executive Director</h5>
          <div className="df fw-w jc-c">
            {groups.ED.map((m, i) => (
              <BoardMemberProfile key={i} member={m} />
            ))}
            {renderProfileSkeletons(numSkeletonED)}
          </div>
          <p className="my4 tc">
            {ED_APP_ISOPEN ? (
              <Fragment>
                {ED_APP_STATUS_OPEN}
                <A href={ED_APP_LINK}>Apply here.</A>
              </Fragment>
            ) : (
              ED_APP_STATUS_CLOSED
            )}
          </p>
        </section>

        <hr className="w-100 my4" />

        <section>
          <h5 className="title5 tc my4">Board Of Advisors</h5>
          <div className="df fw-w jc-c">
            {renderProfileSkeletons(numSkeletonBOA)}
            {groups.BOA.sort((x: BoardMember, y: BoardMember) =>
              x.lname.localeCompare(y.lname)
            ).map((m: BoardMember, i: number) => (
              <BoardMemberProfile key={i} member={m} />
            ))}
          </div>
          <p className="my4 tc">
            {BOA_APP_STATUS}{' '}
            {BOA_APP_ISOPEN ? <A href={BOA_APP_LINK}>Apply here.</A> : null}
          </p>
        </section>
      </Container>
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
