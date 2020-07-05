import React, { FC, Fragment, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { connect, ConnectedProps } from 'react-redux'
import { AppState } from 'store/types'
import { fetchEvents } from 'store/actions'
import { getIsFetchingEvents, getEvents, getEventsError } from 'store/selectors'
import { Cell } from 'components'
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
        <div className={'df fd-c fw-w gridY container px4-s'}>
          {Object.keys(hxstory)
            .sort((a, b) => parseInt(b) - parseInt(a))
            .map((k, i) => (
              <Cell key={i} className="timeContainer">
                <div className="labelContainer">
                  <div>
                    <span>{k}</span>
                  </div>
                </div>
                <div className="py3-s px5-s py5 px7 contentContainer">
                  {hxstory[k].map((e, i) => (
                    <Fragment key={i}>
                      <h5 className="title5 my2">{e.title}</h5>
                      <span>{e.university}</span>
                      <p>{e.desc}</p>
                      {e.cta && <a href={e.cta}>Learn More</a>}
                    </Fragment>
                  ))}
                </div>
              </Cell>
            ))}
        </div>
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
