import React from 'react';
import './Menu.scss';
import { NavLink as RouterLink } from 'react-router-dom';
import { Menu as UtilityMenu } from 'react-utility-components';
import { Grid, Cell } from '../../components/';

const { Link, SubMenu } = UtilityMenu;

const checkActive = function (href) {
  return (match, location) => 
    location ? (location.pathname === href) : false;
}

class Menu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className='menu'>
          <Grid className='bar'>
            <Cell md={2} auto>
              <a href='/'>
                <img src={`${process.env.PUBLIC_URL}/assets/branding/Logo-wSymbol.svg`} alt='Midwest Asian American Students Union' />
              </a>
            </Cell>

            <Cell md={10} auto>
              <UtilityMenu
                className='utilMenu'
                dropdown
                horizontal
                linkWrapper={function (href, children) { return <RouterLink to={href} isActive={checkActive(href)}>{children}</RouterLink>}}
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
                  <Link href='/report'>Annual Report</Link>
                  <Link href='/pastconferences'>Past Conferences</Link>
                  <Link href='/pastawards'>Past Award Recipients</Link>
                </SubMenu>

                <Link href='/contact'>Contact Us</Link>

              </UtilityMenu>
            </Cell>
          </Grid>
        </header>
        <div className='barSpace'></div>
      </React.Fragment>
    )
  }
}

export default Menu;