import React, { FC, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { connect, ConnectedProps } from 'react-redux'
import { AppState } from 'store/types'
import { fetchResources } from 'store/actions'
import { A } from 'components/Link'
import { Container } from 'components/Container'
import { TextBlock } from 'components/TextBlock'
import {
  getIsFetchingResources,
  getResources,
  getResourcesError,
} from 'store/selectors'

type Props = RouteComponentProps & ReduxProps & {}

export const Resources: FC<Props> = ({
  fetchResources,
  isFetchingResources,
  resources,
  resourcesError,
}) => {
  useDocumentTitle('Organizations')

  useEffect(() => {
    if (resources && !resources.length && !resourcesError) {
      fetchResources()
    }
  }, [fetchResources, resources, resourcesError])

  return (
    <Container className="tc">
      <TextBlock title="APIDA Organization Resources">
        <p>
          Here is a list of resources to get involved in other organizations and
          communities near you.
        </p>
        <div>
          {isFetchingResources ? (
            <span>loading...</span>
          ) : (
            <ul className="my0 mxa dib tl">
              {resources.map((r, i) => (
                <li key={i}>
                  <A href={r.url}>
                    <span>{r.title}</span>
                    {r.titleAbv && <span> ({r.titleAbv})</span>}
                  </A>
                </li>
              ))}
            </ul>
          )}
        </div>
      </TextBlock>
    </Container>
  )
}

const mapStateToProps = (state: AppState) => ({
  isFetchingResources: getIsFetchingResources(state),
  resources: getResources(state),
  resourcesError: getResourcesError(state),
})

const mapDispatchToProps = {
  fetchResources,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

export const ResourcesContainer = connector(Resources)
