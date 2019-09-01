import React from 'react';
import { Cell, Grid, Page, Type } from '../../components';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import modules from './Contact.module.scss';

class Contact extends React.Component {
  componentDidMount() {
    document.title = 'Contact - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page className={`${modules.contact}`}>
        <Type variant='h2'>Contact Us</Type>
        
        <p>Connect with us through our social media below!</p>

        <div className={`${modules.linkContainer}`}>
          <Grid className={`${modules.linkGrid}`}>
            <Cell auto>
              <a href='https://facebook.com/maasuforchange'><FaFacebookF /></a>
            </Cell>
            <Cell auto>
              <a href='https://twitter.com/MAASUOfficial'><FaTwitter /></a>
            </Cell>
            <Cell auto>
              <a href='https://www.instagram.com/MAASUOfficial/'><FaInstagram /></a>
            </Cell>
          </Grid>
        </div>

        <footer>
          <span>Special thanks to Craig Bossley for logo design.</span>
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