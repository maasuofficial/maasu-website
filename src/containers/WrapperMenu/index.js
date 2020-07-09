import React from 'react'
import { Link } from '@reach/router'
import { Icon } from 'components/Icon'

const menu = {
  Home: '/',
  'About Us': {
    'Our Mission': '/mission',
    'Executive Board': '/board',
    Membership: '/membership',
    'Directors Council': '/dc',
    'Our Hxstory': '/hxstory',
  },
  Conferences: { 'Host a Conference': '/host' },
  Programs: {
    MAASUx: '/programs/maasux',
    'Where Are You From?': '/programs/whereareyoufrom',
  },
  Resources: {
    'Awards and Scholarships': '/awards',
    Organizations: '/organizations',
  },
  Alumni: '/alumni',
  Archives: {
    'Annual Report': '/annual',
    Newsletter: '/newsletter',
    Conferences: '/conferences',
  },
  Donate: '/donate',
  'Contact Us': '/contact',
}

let menuOverride = false

class WrapperMenu extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleMenuClose = this.handleMenuClose.bind(this)
    this.state = { open: false }

    this.clickedMenu = false
  }

  handleClick(e) {
    e.preventDefault()

    const open = !this.state.open
    this.setState({ open })
  }

  handleMenuClose() {
    if (this.state.open) {
      this.setState({ open: false })
    }
  }

  render() {
    // TEMP menuOverride for sc 2020 promo bg color
    menuOverride = window.location.pathname === '/'

    const keys = Object.keys(menu)

    return (
      <div
        className={`posr h-100 w-100 ofh bg-text-dark ${
          this.state.open ? 'menuOpenWM' : ''
        }`}
      >
        {/* trigger menu */}

        <a
          href="/"
          className="posa ma3 fs2 z5 triggerWM"
          onClick={this.handleClick}
          aria-expanded={this.state.open}
          aria-label="menu toggle button"
          role="button"
        >
          {/* TEMP for sc 2020 promo menu icon */}
          <Icon icon="align-right" className="menuIconWM menuIconOverride" />
        </a>

        {/* menu */}

        <div className="posa t-0 l-0 mt4 pt4 w-100">
          <div className="h-100 w-100 of-ya">
            <nav className="py4" aria-label="menu">
              <ul className="lstn ma0 pl4">
                {keys.map((k, i) => {
                  const item = menu[k]
                  return typeof item === 'string' ? (
                    <li key={i} className="py1">
                      <Link
                        to={item}
                        onClick={this.handleMenuClose}
                        tabIndex={this.state.open ? 0 : -1}
                        className="fs1 tdn hov-tdu c-bg-main"
                      >
                        {k}
                      </Link>
                    </li>
                  ) : (
                    <li key={i}>
                      <span className="fs1 fw700 c-bg-dark">{k}</span>
                      <ul className="lstn ma0 pl4">
                        {Object.keys(item).map((sk, j) => (
                          <li key={j} className="py1">
                            <Link
                              to={item[sk]}
                              onClick={this.handleMenuClose}
                              tabIndex={this.state.open ? 0 : -1}
                              className="fs1 tdn hov-tdu c-bg-main"
                            >
                              {sk}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>

        {/* content */}

        <div
          className={'posa h-100 w-100 wrapperContentWM'}
          onClick={this.handleMenuClose}
        >
          <div
            className={`posr h-100 w-100 contentWM ${
              menuOverride ? 'bgorange' : ''
            }`}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default WrapperMenu
