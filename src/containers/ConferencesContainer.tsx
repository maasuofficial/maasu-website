import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from '../hooks/meta'
import { Container } from '../components/Container'
import { TextBlock } from '../components/TextBlock'
import { MONTHS } from '../constants'
import { conferences } from '../data/conferences'
import { getConferenceTypeName } from '../utils'

export function ConferencesContainer(_: RouteComponentProps) {
  useDocumentTitle('Conferences')

  return (
    <Container>
      <TextBlock title="Past Conferences">
        <p className="tc">
          Below is a summary of all conferences that MAASU has aided in hosting
          or organizing.
        </p>

        <div>
          <table className="mxa mb4">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Theme</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {conferences.map((c, index) => {
                const d = new Date(c.date)
                const ye = d.getFullYear()
                const mo = MONTHS[d.getMonth()]

                const date = c.isApproxDate
                  ? `${mo}, ${ye}`
                  : `${mo} ${d.getDate()}, ${ye}`

                return (
                  c.id && (
                    <tr key={index}>
                      <td>{date}</td>
                      <td>{getConferenceTypeName(c.type)}</td>
                      <td>{c.title}</td>
                      <td>{`${c.host}, ${c.state}`}</td>
                    </tr>
                  )
                )
              })}
            </tbody>
          </table>
        </div>
      </TextBlock>
    </Container>
  )
}
