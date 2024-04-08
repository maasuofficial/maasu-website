import { Fragment } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from '../hooks/meta'
import { A } from '../components/Link'
import { Container } from '../components/Container'
import { TextBlock } from '../components/TextBlock'
import { HistoryEvent, history } from '../data/history'

export function HxstoryContainer(_: RouteComponentProps) {
  useDocumentTitle('Our Hxstory')

  const hxstory: Record<string, HistoryEvent[]> = history.reduce((acc, val) => {
    const key = new Date(val.date).getFullYear()
    if (!acc[key]) acc[key] = []
    acc[key].push(val)

    return acc
  }, {} as Record<string, HistoryEvent[]>)

  return (
    <Container>
      <TextBlock title="Our Hxstory">
        <p>
          MAASU uses the spelling hxstory instead of history. Traditional
          history tends to neglect the wonderful stories and contributions of
          womxn and those who do not gender identify. The "x" stands for and is
          inclusive to many different identities struggles, and
          intersectionalities.
        </p>
        {Object.keys(hxstory)
          .sort((a, b) => parseInt(b) - parseInt(a))
          .map((k, i) => (
            <div key={i} className="posr df">
              <div className="posr px1 bg-primary-main" />
              <div>
                <div className="px5 fw900 fs1 c-primary-main">{k}</div>
                <div className="px5 pb5">
                  {hxstory[k].map((e, i) => (
                    <Fragment key={i}>
                      <h5 className="title5 my2">{e.title}</h5>
                      {e.university && <span>{e.university}</span>}
                      <p className="ma0">{e.desc}</p>
                      {e.cta && <A href={e.cta}>Learn More</A>}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </TextBlock>
    </Container>
  )
}
