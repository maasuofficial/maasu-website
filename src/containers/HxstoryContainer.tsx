import React, { FC, Fragment, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { connect, ConnectedProps } from 'react-redux'
import { AppState } from 'store/types'
import { fetchEvents } from 'store/actions'
import { getIsFetchingEvents, getEvents, getEventsError } from 'store/selectors'
import { HEvent } from 'store/Events/types'
import { A } from 'components/Link'
import { Container } from 'components/Container'
import { TextBlock } from 'components/TextBlock'
import { HXSTORY_PRELUDE } from 'constants/strings'
import { SkeletonProvider, SkeletonConsumer } from 'components/Skeleton'

type Props = RouteComponentProps & ReduxProps & {}

export const Hxstory: FC<Props> = ({
  fetchEvents,
  isFetchingEvents,
  events,
  eventsError,
}) => {
  useDocumentTitle('Our Hxstory')

  const numEvents = 9
  const renderHxstorySkeletonItems = () =>
    [...Array(numEvents)].map((_, i) => (
      <div key={i} className="posr df">
        <div className="posr px1 bg-primary-main" />
        <div>
          <SkeletonConsumer width={60} height={26} className="ml5" />
          <div className="px5 pb5">
            {[...Array(Math.floor(Math.random() * 2) + 1)].map((_, i) => (
              <Fragment key={i}>
                <SkeletonConsumer width={200} height={26} className="my2" />
                <SkeletonConsumer width={600} height={20} className="my2" />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    ))

  useEffect(() => {
    if (events && !events.length && !eventsError) {
      fetchEvents()
    }
  }, [fetchEvents, events, eventsError])

  type HxstoryType = { [key: string]: HEvent[] }

  const hxstory = events.reduce((acc, val: HEvent) => {
    const key = new Date(val.date).getFullYear()
    if (!acc[key]) acc[key] = []
    acc[key].push(val)

    return acc
  }, {} as HxstoryType)

  return (
    <SkeletonProvider isLoading={isFetchingEvents}>
      <Container>
        <TextBlock title="Our Hxstory">
          <p>{HXSTORY_PRELUDE}</p>

          {isFetchingEvents && renderHxstorySkeletonItems()}

          {isFetchingEvents ? (
            <span>loading...</span>
          ) : (
            Object.keys(hxstory)
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
                          <span>{e.university}</span>
                          <p className="ma0">{e.desc}</p>
                          {e.cta && <A href={e.cta}>Learn More</A>}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              ))
          )}
        </TextBlock>
      </Container>
    </SkeletonProvider>
  )
}

const mapStateToProps = (state: AppState) => ({
  isFetchingEvents: getIsFetchingEvents(state),
  events: getEvents(state),
  eventsError: getEventsError(state),
})

const mapDispatchToProps = {
  fetchEvents,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

export const HxstoryContainer = connector(Hxstory)
