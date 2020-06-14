import React from 'react'
import {
  Page,
  Time,
  Timeline,
  TDesc,
  TSub,
  TTitle,
  Type,
} from '../../components'
import HISTORY from './history.json'

class History extends React.Component {
  componentDidMount() {
    document.title = 'History - The Midwest Asian American Students Union'
  }

  render() {
    return (
      <Page>
        <Type variant="sub2">Our History</Type>

        <Timeline>
          {Object.keys(HISTORY)
            .sort(function (a, b) {
              return parseInt(b) - parseInt(a)
            })
            .map(function (k, index) {
              return (
                <Time key={index} label={k}>
                  {HISTORY[k].map(function (item, index) {
                    return (
                      <React.Fragment key={index}>
                        <TTitle>{item.title}</TTitle>
                        <TSub>{item.sub}</TSub>
                        <TDesc>{item.desc}</TDesc>
                      </React.Fragment>
                    )
                  })}
                </Time>
              )
            })}
        </Timeline>
      </Page>
    )
  }
}

export default History
