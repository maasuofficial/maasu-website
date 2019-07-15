import React from 'react';
import { Page, Type } from '../../components';

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
      </Page>
    );
  }
}

export default Contact;