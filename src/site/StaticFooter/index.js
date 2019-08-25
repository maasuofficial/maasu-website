import React from 'react';
import modules from './StaticFooter.module.scss';

class StaticFooter extends React.Component {
  render() {
    return (
      <footer className={`${modules.staticFooter}`}>
        <div className={`${modules.logo}`}>
          <img src={`${process.env.PUBLIC_URL}/assets/branding/Logo.svg`} alt='The Midwest Asian American Students Union' />
        </div>

        <span className={`${modules.copyright}`}>Special thanks to Craig Bossley for all his hard work.</span>

        <div>
          <span className={`${modules.copyright}`}>&copy;MAASU 2019. For additional information or questions regarding the website, please contact <a className='mail' target='_blank' rel='noopener noreferrer' href='MAILTO:technet@maasu.org'>technet@maasu.org</a>.</span>
        </div>
        <br />
      </footer>
    );
  }
}

export default StaticFooter;