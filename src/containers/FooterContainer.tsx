import React, { FC } from 'react'
import { APP_NAME_LONG, SOCIAL, YEAR } from 'constants/strings'
import { Icon, IconName } from 'components/Icon'
import { findAsset } from 'utils/files'

export const FooterContainer: FC<{}> = () => {
  return (
    <footer className="container pt4">
      <div className="df fd-c-s jc-sb">
        <div className="w-100 w-30-ns mb6">
          <img src={findAsset('branding/light/text.svg')} alt={APP_NAME_LONG} />
        </div>
        <div className="w-100 w-30-ns">
          <div className="df jc-fs">
            {SOCIAL.map((s, i) => (
              <a key={i} className="c-inh mx2" href={s.url} aria-label={s.name}>
                <Icon className="fs1" prefix="fab" icon={s.icon as IconName} />
              </a>
            ))}
          </div>
          <div className="pt4">
            &copy; {YEAR} {APP_NAME_LONG}. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
