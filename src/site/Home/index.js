import React from 'react';
import SC from '../Upcoming/SC';
import { Page, Type } from '../../components';

class Home extends React.Component {
  componentDidMount() {
    document.title = 'The Midwest Asian American Students Union';
  }

  render() {
    return (
      <React.Fragment>

        <SC />

        {/* <Page>
          <Type var='h2'>See the news.</Type>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmaasuofficial%2F&tabs=timeline&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId" title='MAASU official facebook feed' width="340" height="500" style={{ border:'none', overflow:'hidden' }} scrolling="no" frameBorder="0" allow="encrypted-media"></iframe>

        </Page> */}

        {/* <Page>
          hear what they have to say
        </Page> */}

      </React.Fragment>
    );
  }
}

export default Home;