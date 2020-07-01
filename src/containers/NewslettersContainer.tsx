import React, { FC, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { connect, ConnectedProps } from 'react-redux'
import { AppState } from 'store/types'
import { fetchNewsletters } from 'store/actions'
import {
  getIsFetchingNewsletters,
  getNewsletters,
  getNewslettersError,
} from 'store/selectors'
import { MONTHS } from 'constants/strings'

type Props = RouteComponentProps & ReduxProps & {}

export const Newsletters: FC<Props> = ({
  fetchNewsletters,
  isFetchingNewsletters,
  newsletters,
  newslettersError,
}) => {
  useDocumentTitle('Newsletter')

  useEffect(() => {
    if (newsletters && !newsletters.length && !newslettersError) {
      fetchNewsletters()
    }
  }, [fetchNewsletters, newsletters, newslettersError])

  return (
    <div className="container py6">
      <h4 className="title4 tc">Newsletter</h4>
      <p className="tc">
        The MAASU newsletter is a quick way to stay up to date on MAASU news and
        current issues within the community.
      </p>
      <div className="tc">
        {isFetchingNewsletters ? (
          <span>loading...</span>
        ) : (
          <table className="mxa">
            <thead>
              <tr>
                <th>volume</th>
                <th>issue</th>
                <th>newsletter</th>
              </tr>
            </thead>
            <tbody>
              {newsletters.map((n, i) => {
                const d = new Date(n.date)

                return (
                  <tr key={i}>
                    <td>{n.vol}</td>
                    <td>{n.issue}</td>
                    <td className="tr">
                      <a
                        href={n.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="tdu hov-tdn c-inh"
                      >
                        {n.title && <span>{n.title} -</span>}
                        <span>
                          {MONTHS[d.getMonth()]} {d.getFullYear()}
                        </span>
                      </a>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  isFetchingNewsletters: getIsFetchingNewsletters(state),
  newsletters: getNewsletters(state),
  newslettersError: getNewslettersError(state),
})

const mapDispatchToProps = {
  fetchNewsletters,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

export const NewslettersContainer = connector(Newsletters)
