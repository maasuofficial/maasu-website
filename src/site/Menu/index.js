import React from 'react';
import './Menu.scss';
import { Link as RouterLink, withRouter } from 'react-router-dom'; 
import { Menu as UtilityMenu } from 'react-utility-components';

const { Link, SubMenu } = UtilityMenu;

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.getNavLinkClass = this.getNavLinkClass.bind(this);
  }  
  getNavLinkClass(path) {
    return this.props.location.pathname === path ? 'active' : '';
  }
  
  render() {
    return (
      <header className='menu'>
        <UtilityMenu
          // active
          dropdown
          // horizontal
          // TODO
          linkWrapper={(href, children) => <RouterLink to={href}>{children}</RouterLink>}
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
            <Link 
              className={this.getNavLinkClass('/host')}
              href='/host'>Host a Conference</Link>
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
      </header>
    )
  }
}

export default withRouter(Menu);