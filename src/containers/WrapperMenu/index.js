import React from 'react'
import { Link as RouterLink } from '@reach/router'
import { Menu as UtilityMenu } from 'react-utility-components'
import { FaAlignRight } from 'react-icons/fa'

let menuOverride = false

const { Link, SubMenu } = UtilityMenu

// const checkActive = function (href) {
//   return (match, location) => (location ? location.pathname === href : false)
// }

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
    // this.clickedMenu = true

    // const trigger = document.querySelector('.triggerWM')
    // trigger.classList.remove('attentionWM')

    const open = !this.state.open
    this.setState({ open })
  }

  handleMenuClose() {
    if (this.state.open) {
      this.setState({ open: false })
    }
  }

  retrieveCookie(cname) {
    const cookies = decodeURIComponent(document.cookie)

    const start = cookies.indexOf(cname + '=') + (cname.length + 1)
    const end = cookies.indexOf(';', start)

    return end < 0 ? cookies.substring(start) : cookies.substring(start, end)
  }

  storeCookie(cname, cvalue, exdays) {
    const d = new Date()
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
    const expires = d.toUTCString()
    document.cookie = `${cname}=${cvalue}; expires=${expires}`
  }

  componentDidMount() {
    // const time = 7 // seconds
    // setTimeout(() => {
    //   if (!this.clickedMenu) {
    //     const trigger = document.querySelector('.triggerWM')
    //     trigger.classList.add('attentionWM')
    //   }
    // }, time * 1000)
    // const cookie = this.retrieveCookie('openedMenuBefore')
    // if (cookie.length === 0) {
    //   this.storeCookie('openedMenuBefore', 'true', 30)
    // } else {
    //   if (cookie === 'true') {
    //     this.clickedMenu = true
    //   }
    // }
  }

  render() {
    // TEMP menuOverride for sc 2020 promo menu icon
    menuOverride = window.location.pathname === '/'

    return (
      <div className={`wrapperWM ${this.state.open ? 'menuOpenWM' : ''}`}>
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
          <FaAlignRight
            className={'menuIconWM menuIconOverride'}
            style={{ color: menuOverride ? 'white' : 'inherit' }}
          />
        </a>

        {/* menu */}

        <div className={'wrapperMenuWM'}>
          <div className={'menuContainerWM'}>
            <UtilityMenu
              className={'utilityMenuWM'}
              linkWrapper={(href, children) => {
                // const checkActive = function (href) {
                //   return (match, location) => (location ? location.pathname === href : false)
                // }
                return (
                  <RouterLink
                    to={href}
                    // isActive={checkActive(href)}
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
                <Link href="/members">Member Schools</Link>
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
                <Link href="/newsletter">Newsletter</Link>
                <Link href="/pastawards">Past Award Recipients</Link>
                <Link href="/pastconferences">Past Conferences</Link>
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
          <div className={'posr h-100 w-100 contentWM'}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default WrapperMenu
