import React, { FC, Fragment, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { connect, ConnectedProps } from 'react-redux'
import { AppState } from 'store/types'
import { fetchEvents } from 'store/actions'
import { getIsFetchingEvents, getEvents, getEventsError } from 'store/selectors'
import { Time, Timeline, TDesc, TSub, TTitle } from 'components'
import { HEvent } from 'store/Events/types'
import { HXSTORY_PRELUDE } from 'constants/strings'

type Props = RouteComponentProps & ReduxProps & {}

export const Hxstory: FC<Props> = ({
  fetchEvents,
  isFetchingEvents,
  events,
  eventsError,
}) => {
  useDocumentTitle('Our Hxstory')

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
    <div className="container pt6">
      <h4 className="title4">Our Hxstory</h4>
      <p>{HXSTORY_PRELUDE}</p>

      {isFetchingEvents ? (
        <span>loading...</span>
      ) : (
        <Timeline className="px6">
          {Object.keys(hxstory)
            .sort((a, b) => parseInt(b) - parseInt(a))
            .map((k, i) => (
              <Time key={i} label={k}>
                {hxstory[k].map((e, i) => (
                  <Fragment key={i}>
                    <TTitle>{e.title}</TTitle>
                    <TSub>
                      <span>{e.university}</span>
                    </TSub>
                    <TDesc>{e.desc}</TDesc>
                    {e.cta && <a href={e.cta}>Learn More</a>}
                  </Fragment>
                ))}
              </Time>
            ))}
        </Timeline>
      )}
    </div>
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
