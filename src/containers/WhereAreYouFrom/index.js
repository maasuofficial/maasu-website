import React from 'react'
import { EA } from 'components/EmailAnchor'
import { Page, Type } from '../../components'
import { SOCIAL_FACEBOOK } from 'constants/strings'

class WhereAreYouFrom extends React.Component {
  render() {
    return (
      <Page>
        <Type variant="h2">The Where Are You From Project</Type>
        <p>#whereareyoufrom?</p>
        <p>
          MAASU strives to tell the story of APIAs (Asian Pacific Islander
          Americans) in the Midwest through the #whereareyoufrom project. The
          project’s main goal is to combat the question "Where are you from?"
          that many APIAs are are constantly asked.
        </p>
        <p>
          This question identifies APIAs as foreigners in their own home, making
          them perpetual foreigners when they are not. The #whereareyoufrom
          project collects the stories of individuals across the Midwest through
          videos, audio and written stories. The stories we have collected range
          from working professionals to students, family, and friends who grew
          up in the Midwest.
        </p>
        <p>
          You can listen to some of the stories on the MAASU{' '}
          <a href="https://archive.storycorps.org/user/maasu/">
            Storycorps page
          </a>{' '}
          where we record and house all audio stories. If you are interested in
          reading stories, you can check out our{' '}
          <a href={SOCIAL_FACEBOOK}>facebook page</a> or view our monthly
          newsletters and read the stories there.
        </p>
        <p>
          For more information on this project, contact our advocacy chair at{' '}
          <EA>advocacy@maasu.org</EA>.
        </p>
      </Page>
    )
  }
}

export default WhereAreYouFrom
