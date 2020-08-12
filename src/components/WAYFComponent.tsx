import React, { FC, Fragment } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { A } from 'components/Link'
import { EA } from 'components/EmailAnchor'
import { SOCIAL } from 'constants/strings'

type Props = RouteComponentProps & {}

export const WAYFComponent: FC<Props> = () => {
  useDocumentTitle('Where Are You From')

  return (
    <Fragment>
      <h4 className="title4">The Where Are You From Project</h4>
      <p>#whereareyoufrom?</p>
      <p>
        MAASU strives to tell the story of Asian Pacific Islander Desi Americans
        in the Midwest through the #whereareyoufrom project. The project’s main
        goal is to combat the question "Where are you from?" that many APIDAs
        are are constantly asked.
      </p>
      <p>
        This question identifies APIDAs as foreigners in their own home, making
        them perpetual foreigners when they are not. The #whereareyoufrom
        project collects the stories of individuals across the Midwest through
        videos, audio and written stories. The stories we have collected range
        from working professionals to students, family, and friends who grew up
        in the Midwest.
      </p>
      <p>
        You can listen to some of the stories on the MAASU{' '}
        <A href="https://archive.storycorps.org/user/maasu">Storycorps page</A>{' '}
        where we record and house all audio stories. If you are interested in
        reading stories, you can check out our{' '}
        <A href={SOCIAL.filter((s) => s.name === 'facebook')[0].url}>
          facebook page
        </A>{' '}
        or view our monthly newsletters and read the stories there.
      </p>
      <p>
        For more information on this project, contact{' '}
        <EA>advocacy@maasu.org</EA>.
      </p>
    </Fragment>
  )
}
