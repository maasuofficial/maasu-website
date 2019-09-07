import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Menu as UtilityMenu } from 'react-utility-components';
import { FaAlignRight } from 'react-icons/fa';
import modules from './WrapperMenu.module.scss';
import './WrapperMenu.scss';

const { Link, SubMenu } = UtilityMenu;

const checkActive = function (href) {
  return (match, location) => 
    location ? (location.pathname === href) : false;
}

class WrapperMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.state = { open: false };
  }

  handleClick(e) {
    e.preventDefault();
    let open = !this.state.open;
    this.setState({ open });
  }

  handleMenuClose() {
    if (this.state.open) {
      this.setState({ open: false });
    }
  }

  render() {
    return (
      <div className={`${modules.wrapper} ${this.state.open ? modules.menuOpen : ''}`}>
        
        {/* trigger menu */}

        {/* <div className={`${modules.horizontalMenu}`}> */}

        <a href='/'
          className={`${modules.trigger}`}
          onClick={this.handleClick}
          aria-expanded={this.state.open}
          role='button'
        >
          <FaAlignRight className={`${modules.menuIcon}`} />
        </a>

        {/* </div> */}

        {/* menu */}

        <div className={`${modules.wrapperMenu}`}>
          <div className={`${modules.menuContainer}`}>
            <UtilityMenu className={`${modules.utilityMenu}`}
              linkWrapper={(href, children) => {
                return <RouterLink
                  to={href}
                  isActive={checkActive(href)}
                  onClick={this.handleMenuClose}
                  tabIndex={this.state.open ? 0 : -1}
                >{children}</RouterLink>
              }}
            >

              <Link href='/'>Home</Link>

              <SubMenu>
                <Link>About Us</Link>
                <Link href='/mission'>Our Mission</Link> 
                <Link href='/board'>Executive Board</Link>
                <Link href='/members'>Member Schools</Link>
                <Link href='/history'>Our History</Link>
              </SubMenu>

              <SubMenu>
                <Link>Conferences</Link>
                <Link href='/upcoming'>Upcoming</Link>
                <Link href='/host'>Host a Conference</Link>
              </SubMenu>

              <SubMenu>
                <Link>Programs</Link>
                <Link href='/maasux'>MAASUx</Link>
                <Link href='/whereareyoufrom'>#whereareyoufrom</Link>
              </SubMenu>

              <SubMenu>
                <Link>Resources</Link>
                <Link href='/awards'>Awards and Scholarships</Link>
                <Link href='/apiaorgs'>APIA Organizations</Link>
              </SubMenu>

              <Link href='/alumni'>Alumni</Link>

              <SubMenu>
                <Link>Archives</Link>
                <Link href='/newsletter'>Newsletter</Link>
                {/* <Link href='/report'>Annual Report</Link> */}
                {/* <Link href='/pastconferences'>Past Conferences</Link> */}
                <Link href='/pastawards'>Past Award Recipients</Link>
              </SubMenu>

              <Link href='/contact'>Contact Us</Link>

            </UtilityMenu>
          </div>
        </div>
        
        {/* content */}
        
        <div className={`${modules.wrapperContent}`} onClick={this.handleMenuClose}>
          <div className={`${modules.content}`}>
            {this.props.children}
          </div>
        </div>

      </div>
    )
  }
}

export default WrapperMenu;