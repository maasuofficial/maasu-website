import React from 'react'
import { Link } from '@reach/router'
import { Menu as UtilityMenu } from 'components/react-utility-components'
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
  Conferences: { 'host a conference': '/host' },
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

const { Link: MenuLink, SubMenu } = UtilityMenu

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
        className={`posr h-100 w-100 ofh wrapperWM ${
          this.state.open ? 'menuOpenWM' : ''
        }`}
      >
        {/* trigger menu */}

        <a
          href="/"
          className={'triggerWM'}
          onClick={this.handleClick}
          aria-expanded={this.state.open}
          aria-label="menu toggle button"
          role="button"
        >
          {/* TEMP for sc 2020 promo menu icon */}
          <Icon className={'menuIconWM menuIconOverride'} icon="align-right" />
        </a>

        {/* menu */}

        <div className={'posa wrapperMenuWM'}>
          <div className={'h-100 w-100 menuContainerWM'}>
            <UtilityMenu
              className={'utilityMenuWM'}
              linkWrapper={(href, children) => {
                return (
                  <Link
                    to={href}
                    onClick={this.handleMenuClose}
                    tabIndex={this.state.open ? 0 : -1}
                  >
                    {children}
                  </Link>
                )
              }}
            >
              {keys.map((k, i) => {
                const item = menu[k]
                return typeof item === 'string' ? (
                  <MenuLink key={i} href={item}>
                    {k}
                  </MenuLink>
                ) : (
                  <SubMenu key={i}>
                    <MenuLink>{k}</MenuLink>
                    {Object.keys(item).map((sk, j) => (
                      <MenuLink key={j} href={item[sk]}>
                        {sk}
                      </MenuLink>
                    ))}
                  </SubMenu>
                )
              })}
            </UtilityMenu>
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
