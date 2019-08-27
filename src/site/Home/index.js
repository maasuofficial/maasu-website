import React from 'react';
// import { Upcoming } from '../';
import { Page } from '../../components';
import { Type, Grid, Cell, Pressable } from '../../components';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaStream, FaAlignRight, FaRegMap } from 'react-icons/fa';
import { MdMenu, MdEqualizer } from 'react-icons/md';

// import '../../App.scss';

class Home extends React.Component {
  componentDidMount() {
    document.title = 'The Midwest Asian American Students Union';
  }

  render() {
    return (
      <React.Fragment>
        {/* <Page>
          TODO title page
        </Page>
        <Upcoming />
        <Page>
          TODO facebook feed
        </Page>
        <Page>
          TODO instagram feed
        </Page>
        <Page>
          TODO hear what they have to say
        </Page> */}

        {/* background */}
        <div className='sky'>
          <div className='background'>
            <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/sky.jpg)` }}></div>
            <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/sky.jpg)` }}></div>
          </div>
        </div>

        <LeadershipSummit />

        {/* <Construction /> */}

      </React.Fragment>
    );
  }
}

const LeadershipSummit = (props) => {
  return (
    <Page className='leadershipSummit'>
      <header>
        <img src={`${process.env.PUBLIC_URL}/assets/branding/Logo-wSymbol.svg`} alt='The Midwest Asian American Students Union' />
        <Type cap variant='h1'>
          <span>Leadership Summit 2019:</span>
          <br />
          <i className='conferenceName'>Take Flight</i>
          <br />
          <i className='conferenceDate'>October 18-19th</i>
        </Type>
        <Pressable className='register' href='https://docs.google.com/forms/d/e/1FAIpQLSeMjvyZph0ZH5V6Wj1rNxdC-SYGvW2dEE5qTojb-jkM3W-X7A/viewform?fbclid=IwAR0TQoNVBSShC-sXRnb96rZMFZSX3tAzNxV-NnrXeSsFEfdcKYFP5HZUwSo'>
          <Type cap variant='text3'>Register Now!</Type>
        </Pressable>
      </header>

      <Grid className='gridz'>
        <Cell auto>
          <a className='link' aria-label='facebook' href='https://www.facebook.com/MAASUForChange/'><FaFacebookSquare /></a>
          <a className='link' aria-label='instagram' href='https://www.instagram.com/maasuofficial/'><FaInstagram /></a>
        </Cell>
      </Grid>
      
      <Grid className='gridz'>
        <Cell auto>
          <FaStream />
          <MdMenu />
          <MdEqualizer />
          <FaAlignRight />
          <FaRegMap />
        </Cell>
      </Grid>

    </Page>
  )
}

// const Construction = (props) => {
//   return (
//     <Page className='construction'>
//       <header>
//         <Type variant='h1' className='title'><span>Oh no!</span></Type>
//         <Type variant='h2' className='subtitle'>Our website is under construction!</Type>
//       </header>
//       <Type variant='sub6'>You can see any updates or conference information from our social media links:</Type>
//       <Grid className='gridz'>
//         <Cell auto>
//           <a className='link' aria-label='facebook' href='https://www.facebook.com/MAASUForChange/'><FaFacebookSquare /></a>
//           <a className='link' aria-label='instagram' href='https://www.instagram.com/maasuofficial/'><FaInstagram /></a>
//         </Cell>
//       </Grid>
//       <Type variant='sub6'>For more information, please contact <a className='mail' href='mailto:technet@maasu.org'>technet@maasu.org</a>.</Type>
//     </Page>
//   );
// }

export default Home;