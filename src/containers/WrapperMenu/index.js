import React from 'react'
import { Link as RouterLink } from '@reach/router'
import { Menu as UtilityMenu } from 'components/react-utility-components'
import { FaAlignRight } from 'react-icons/fa'

let menuOverride = false

const { Link, SubMenu } = UtilityMenu

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
          <FaAlignRight className={'menuIconWM menuIconOverride'} />
        </a>

        {/* menu */}

        <div className={'posa wrapperMenuWM'}>
          <div className={'h-100 w-100 menuContainerWM'}>
            <UtilityMenu
              className={'utilityMenuWM'}
              linkWrapper={(href, children) => {
                return (
                  <RouterLink
                    to={href}
                    onClick={this.handleMenuClose}
                    tabIndex={this.state.open ? 0 : -1}
                  >
                    {children}
                  </RouterLink>
                )
              }}
            >
              <Link href="/">Home</Link>

              <SubMenu>
                <Link>About Us</Link>
                <Link href="/mission">Our Mission</Link>
                <Link href="/board">Executive Board</Link>
                <Link href="/membership">Member Schools</Link>
                <Link href="/directorscouncil">Directors Council</Link>
                <Link href="/history">Our History</Link>
              </SubMenu>

              <SubMenu>
                <Link>Conferences</Link>
                {/*
                <Link href='/upcoming'>Upcoming</Link>
                */}
                <Link href="/host">Host a Conference</Link>
              </SubMenu>

              <SubMenu>
                <Link>Programs</Link>
                <Link href="/maasux">MAASUx</Link>
                <Link href="/whereareyoufrom">#whereareyoufrom</Link>
              </SubMenu>

              <SubMenu>
                <Link>Resources</Link>
                <Link href="/awards">Awards and Scholarships</Link>
                <Link href="/apiaorgs">APIA Organizations</Link>
              </SubMenu>

              <Link href="/alumni">Alumni</Link>

              <SubMenu>
                <Link>Archives</Link>
                <Link href="/annual">Annual Report</Link>
                <Link href="/newsletter">Newsletter</Link>
                <Link href="/pastawards">Past Award Recipients</Link>
                <Link href="/conferences">Conferences</Link>
              </SubMenu>

              <Link href="/donate">Donate</Link>
              <Link href="/contact">Contact Us</Link>
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
