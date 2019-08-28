import React from 'react';
import { Page, Type } from '../../components';
import modules from './Contact.module.scss';

class Contact extends React.Component {
  componentDidMount() {
    document.title = 'Contact - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page className={`${modules.contact}`}>
        <Type variant='sub2'>Contact Us</Type>
        
        <footer>
          <span>Special thanks to Craig Bossley for logo design!</span>
          <br />
          <span>&copy;MAASU 2019. For additional information or questions regarding the website please contact <a className='mail' href='MAILTO:technet@maasu.org'>technet@maasu.org</a>.</span>
          <br />
          <img className={`${modules.logo}`} src={`${process.env.PUBLIC_URL}/assets/branding/Logo.svg`} alt='The Midwest Asian American Students Union' />
        </footer>

      </Page>
    );
  }
}

export default Contact;