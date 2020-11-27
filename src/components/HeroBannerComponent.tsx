import React, { FC } from 'react'
import {
  CONFERENCE_NAME,
  CONFERENCE_URL,
  HERO_BANNER_IMG,
} from 'constants/strings'

export const HeroBannerComponent: FC = () => {
  return (
    <a className="c-inh tdn" href={CONFERENCE_URL}>
      <img className="br" src={HERO_BANNER_IMG} alt={CONFERENCE_NAME} />
    </a>
  )
}
