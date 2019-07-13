import React from 'react';
import PropTypes from 'prop-types';
import modules from './Menu.module.scss';
import { NavLink } from 'react-router-dom'; 

class Menu extends React.Component {
  render() {
    return (
      <nav className={`${modules.menu}`}>
        {/* logo */}

        <ul style={{textAlign: 'left'}}>
          <ListLink to='/' name='Home' />

          <li>About Us
            <ul>
              <ListLink to='/mission' name='Our Mission' />
              <ListLink to='/board' name='The Board' />
              <ListLink to='/members' name='Members' />
              <ListLink to='/history' name='History' />
            </ul>
          </li>

          <li>Conferences
            <ul>
              <ListLink to='/upcoming' name='Upcoming' />
              <ListLink to='/host' name='Host a Conference' />
            </ul>
          </li>

          <li>Programs
            <ul>
              <ListLink to='/maasux' name='MAASUx' />
            </ul>
          </li>

          <li>Resources
            <ul>
              <ListLink to='/awards' name='Awards and Scholarships' />
              <ListLink to='/apia-orgs' name='APIA Organizations' />
            </ul>
          </li>

          <ListLink to='/alumni' name='Alumni' />

          <li>Archives
            <ul>
              <ListLink to='/newsletter' name='Newsletter' />
              <ListLink to='/report' name='Annual Report' />
              <ListLink to='/past-conf' name='Past Conferences' />
              <ListLink to='/past-awards' name='Past Award Recipients' />
            </ul>
          </li>

          <ListLink to='/contact' name='Contact' />

        </ul>

      </nav>
    )
  }
}

const ListLink = (props) => {
  return (
    <li>
      <NavLink to={props.to}>
        {props.name}
      </NavLink>
    </li>
  );
}

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Menu;