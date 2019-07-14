import React from 'react';
import PropTypes from 'prop-types';
import './Menu.scss';
import { NavLink } from 'react-router-dom'; 

class Menu extends React.Component {
  render() {
    return (
      <header className='menu'>
        <nav>
          {/* TODO logo */}

          <ul>
            <ListLink to='/' name='Home' />

            <li>About Us
              <ul>
                <ListLink to='/mission' name='Our Mission' />
                <ListLink to='/board' name='Executive Board' />
                <ListLink to='/members' name='Member Schools' />
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
                <ListLink to='/whereareyoufrom' name='#WhereAreYouFrom' />
              </ul>
            </li>

            <li>Resources
              <ul>
                <ListLink to='/awards' name='Awards and Scholarships' />
                <ListLink to='/apiaorgs' name='APIA Organizations' />
              </ul>
            </li>

            <ListLink to='/alumni' name='Alumni' />

            <li>Archives
              <ul>
                <ListLink to='/newsletter' name='Newsletter' />
                <ListLink to='/report' name='Annual Report' />
                <ListLink to='/pastconferences' name='Past Conferences' />
                <ListLink to='/pastawards' name='Past Award Recipients' />
              </ul>
            </li>

            <ListLink to='/contact' name='Contact Us' />

          </ul>

        </nav>
      </header>
    )
  }
}

const ListLink = (props) => {
  return (
    <li>
      <NavLink exact to={props.to}>
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