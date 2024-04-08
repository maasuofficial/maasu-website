import { RouteComponentProps } from '@reach/router'
import { A } from '../components/Link'
import { Container } from '../components/Container'
import { TextBlock } from '../components/TextBlock'
import { useDocumentTitle } from '../hooks/meta'
import { annualReports } from '../data/reports'

export function AnnualReportsContainer(_: RouteComponentProps) {
  useDocumentTitle('Annual Report')
  return (
    <Container className="tc">
      <TextBlock title="Annual Report">
        <p>
          The annual report is a compilation of all of MAASU's achievements,
          distinctions, and news for the given year. Below are the previous
          reports.
        </p>
        <div>
          <ul className="lstn pl0">
            {annualReports.map((r, i) => {
              const sy = new Date(r.startDate).getFullYear()
              const ey = new Date(r.endDate).getFullYear()
              return (
                <li key={i}>
                  <A href={r.url}>
                    {sy}-{ey}
                  </A>
                </li>
              )
            })}
          </ul>
        </div>
      </TextBlock>
    </Container>
  )
}
