import React, { FC } from 'react'
import { Link } from '@reach/router'
import { APP_NAME_LONG, SOCIAL, YEAR } from 'constants/strings'
import { Icon, IconName } from 'components/Icon'
import { findAsset } from 'utils/files'

export const FooterComponent: FC<{}> = () => {
  return (
    <footer className="w-100 py5 mt6">
      <div className="container df fd-c-s jc-sb">
        <div className="w-100 w-30-ns">
          <img src={findAsset('branding/light/text.svg')} alt={APP_NAME_LONG} />
        </div>

        <div className="w-100 w-30-ns">
          <div className="df jc-fs mb2">
            {SOCIAL.map((s, i) => (
              <a key={i} className="c-inh mx2" href={s.url} aria-label={s.name}>
                <Icon className="fs1" prefix="fab" icon={s.icon as IconName} />
              </a>
            ))}
          </div>

          <div className="df mb2">
            <Link to="/donate" className="tdn c-inh hov-tdu mr1">
              Donate to Our Cause
            </Link>
            <span aria-hidden="true">|</span>
            <Link to="/contact" className="tdn c-inh hov-tdu mx1">
              Contact Us
            </Link>
          </div>

          <div>
            &copy; {YEAR} {APP_NAME_LONG}. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
