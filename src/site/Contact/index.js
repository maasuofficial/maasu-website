import React from 'react';
import { Page, Type } from '../../components';
import modules from './Contact.module.scss';

class Contact extends React.Component {
  componentDidMount() {
    document.title = 'Contact - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        <Type variant='sub2'>Contact Us</Type>
        <Type variant='sub6'>Contact us! We'd love to get in touch.</Type>
        <form>
          <input type='text' />
          <input type='text' />
          <textarea>

          </textarea>
          <button type='submit'>Send</button>
        </form>

        <footer className={`${modules.staticFooter}`}>
          <div className={`${modules.logo}`}>
            <img src={`${process.env.PUBLIC_URL}/assets/branding/Logo.svg`} alt='The Midwest Asian American Students Union' />
          </div>

          <span className={`${modules.copyright}`}>Special thanks to Craig Bossley for logo design and layout.</span>

          <div>
            <span className={`${modules.copyright}`}>&copy;MAASU 2019. For additional information or questions regarding the website please contact <a className='mail' href='MAILTO:technet@maasu.org'>technet@maasu.org</a>.</span>
          </div>
          <br />
        </footer>

      </Page>
    );
  }
}

export default Contact;