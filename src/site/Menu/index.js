import React from 'react';
import PropTypes from 'prop-types';
import './Menu.scss';
import { NavLink } from 'react-router-dom'; 

class Menu extends React.Component {
  constructor(props) {
    super(props);

    // this.handleMouseOver = this.handleMouseOver.bind(this);

    this.timer = setTimeout(() => {});
  }

  // handleMouseOver(e) {
  //   console.log(e);
  //   this.classList.add('open');
  //   this.setAttribute('aria-expanded', 'true');
  //   clearTimeout(this.timer);
  // }

  componentDidMount() {
    /*    
    let timer;
    let submenus = document.querySelectorAll('li.submenu');
    
    for (let submenu of submenus) {
      submenu.addEventListener('mouseover', function (e) {
        this.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
        clearTimeout(timer);
      })
      submenu.addEventListener('mouseout', function (e) {
        timer = setTimeout(() => {
          this.classList.remove('open');
          this.setAttribute('aria-expanded', 'false');
        }, 1000);
      })
      submenu.addEventListener('blur', function (e) {
        if (!this.contains(e.relatedTarget)) {
          this.classList.remove('open');
          this.setAttribute('aria-expanded', 'false');
        }
      }, true)
      submenu.querySelector('a').addEventListener('click', function (e) {
        if (!submenu.classList.contains('open')) {
          submenu.classList.add('open');
          this.setAttribute('aria-expanded', 'true');
        } else {
          submenu.classList.remove('open');
          this.setAttribute('aria-expanded', 'false');  
        }
        e.preventDefault();
        return false;
      })
    }
    */
  }

  render() {
    return (
      <header className='menu'>
        <nav aria-label='main menu'>
          {/* TODO logo */}

          {/* TODO WCAG 2.0 standards */}
          <ul>
            <ListLink to='/' name='Home' />

            <li className='submenu'>
              <button aria-haspopup='true' aria-expanded='false'><span>About Us</span></button>
              <ul>
                <ListLink to='/mission' name='Our Mission' />
                <ListLink to='/board' name='Executive Board' />
                <ListLink to='/members' name='Member Schools' />
                <ListLink to='/history' name='Our History' />
              </ul>
            </li>

            <li className='submenu'>
              <button aria-haspopup='true' aria-expanded='false'><span>Conferences</span></button>
              <ul>
                <ListLink to='/upcoming' name='Upcoming' />
                <ListLink to='/host' name='Host a Conference' />
              </ul>
            </li>

            <li className='submenu'>
              <button aria-haspopup='true' aria-expanded='false'><span>Programs</span></button>
              <ul>
                <ListLink to='/maasux' name='MAASUx' />
                <ListLink to='/whereareyoufrom' name='#WhereAreYouFrom' />
              </ul>
            </li>

            <li className='submenu'>
              <button aria-haspopup='true' aria-expanded='false'><span>Resources</span></button>
              <ul>
                <ListLink to='/awards' name='Awards and Scholarships' />
                <ListLink to='/apiaorgs' name='APIA Organizations' />
              </ul>
            </li>

            <ListLink to='/alumni' name='Alumni' />

            <li className='submenu'>
              <button aria-haspopup='true' aria-expanded='false'><span>Archives</span></button>
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
        <span>{props.name}</span>
      </NavLink>
    </li>
  );
}

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Menu;