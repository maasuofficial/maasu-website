import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from '../hooks/meta'
import { Container } from '../components/Container'
import { TextBlock } from '../components/TextBlock'
import { BoardMemberProfile } from '../components/BoardMemberProfile'
import { board } from '../data/board'

export function BoardContainer(_: RouteComponentProps) {
  useDocumentTitle('Executive Board')

  return (
    <Container>
      <TextBlock title="Executive Board">
        <span>
          MAASU's executive board is divided into four subsections for a
          collectively stronger focus on each of the subsections' duties and
          roles. These subsections are the executive director, the executive
          coordinating committee, the directors council, and the board of
          advisors. Each subsection plays an integral role in the management of
          MAASU functions.
        </span>
      </TextBlock>

      <section>
        <h5 className="title5 tc my2">Executive Coordinating Committee</h5>
        <div className="df fw-w jc-c">
          {board
            .filter((member) => member.type === 'ECC')
            .map((m, i) => (
              <BoardMemberProfile key={i} member={m} />
            ))}
        </div>
        <p className="my4 tc">
          Executive Coordinating Committee applications are current closed.
        </p>
      </section>

      <hr className="w-100 my4" />

      <section>
        <h5 className="title5 tc my2">Directors Council</h5>
        <div className="df fw-w jc-c">
          {board
            .filter((member) => member.type === 'DC')
            .map((m, i) => (
              <BoardMemberProfile key={i} member={m} />
            ))}
        </div>
        <p className="my4 tc">
          Directors Council applications are currently closed.
        </p>
      </section>

      <hr className="w-100 my4" />

      <section>
        <h5 className="title5 tc my2">Executive Director</h5>
        <div className="df fw-w jc-c">
          {board
            .filter((member) => member.type === 'ED')
            .map((member, i) => (
              <BoardMemberProfile key={i} member={member} />
            ))}
        </div>
        <p className="my4 tc">
          Executive Director applications are currently closed.
        </p>
      </section>

      <hr className="w-100 my4" />

      <section>
        <h5 className="title5 tc my4">Board Of Advisors</h5>
        <div className="df fw-w jc-c">
          {board
            .filter((member) => member.type === 'BOA')
            .map((member, i) => (
              <BoardMemberProfile key={i} member={member} />
            ))}
        </div>
        <p className="my4 tc">
          Board of Advisors applications are currently closed.
        </p>
      </section>
    </Container>
  )
}
