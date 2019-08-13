import React from 'react';
import './Menu.scss';
import { NavLink } from 'react-router-dom'; 
import { Menu as MenuUtil } from 'react-utility-components';

const { Link: LinkUtil, SubMenu } = MenuUtil;

class Menu extends React.Component {
  render() {
    return (
      <header className='menu'>
        <MenuUtil
          dropdown
          linkWrapper={(href, children) => <NavLink to={href}>{children}</NavLink>}
        >

          <LinkUtil href='/'>Home</LinkUtil>

          <SubMenu>
            <LinkUtil>About Us</LinkUtil>
            <LinkUtil href='/mission'>Our Mission</LinkUtil>
            <LinkUtil href='/board'>Executive Board</LinkUtil>
            <LinkUtil href='/members'>Member Schools</LinkUtil>
            <LinkUtil href='/history'>Our History</LinkUtil>
          </SubMenu>

          <SubMenu>
            <LinkUtil>Conferences</LinkUtil>
            <LinkUtil href='/upcoming'>Upcoming</LinkUtil>
            <LinkUtil href='/host'>Host a Conference</LinkUtil>
          </SubMenu>

          <SubMenu>
            <LinkUtil>Programs</LinkUtil>
            <LinkUtil href='/maasux'>MAASUx</LinkUtil>
            <LinkUtil href='/whereareyoufrom'>#whereareyoufrom</LinkUtil>
          </SubMenu>

          <SubMenu>
            <LinkUtil>Resources</LinkUtil>
            <LinkUtil href='/awards'>Awards and Scholarships</LinkUtil>
            <LinkUtil href='/apiaorgs'>APIA Organizations</LinkUtil>
          </SubMenu>

          <LinkUtil href='/alumni'>Alumni</LinkUtil>

          <SubMenu>
            <LinkUtil>Archives</LinkUtil>
            <LinkUtil href='/newsletter'>Newsletter</LinkUtil>
            <LinkUtil href='/report'>Annual Report</LinkUtil>
            <LinkUtil href='/pastconferences'>Past Conferences</LinkUtil>
            <LinkUtil href='/pastawards'>Past Award Recipients</LinkUtil>
          </SubMenu>

          <LinkUtil href='/contact'>Contact Us</LinkUtil>

        </MenuUtil>
      </header>
    )
  }
}

export default Menu;