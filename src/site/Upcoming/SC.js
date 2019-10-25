import React from 'react';
import { 
  // Type, 
  Page 
} from '../../components';
import modules from './SC.module.scss';

class SC extends React.Component {
  // console.log('test', window.location.pathname);
  // if (window.location.hash.split('-')[0] == '#item') {
  //   console.log('valid');
  //   // $('ul.side').addClass('hashed');
  // } else {
  //   console.log('invalid');
  // }
  // console.log(JSON.stringify(
  //   props.match
  // ));

  // let menu = document.getElementsByClassName('menuIconOverride')[0];
  // console.log('menu', menu);
  // [0].style.color = 'var(--palette-background-main)';
  componentDidMount() {
    // const script = document.createElement("script");

    // script.src = 'https://vjs.zencdn.net/7.6.5/video.js';
    // script.async = true;

    // document.body.appendChild(script);
  }

  render() {

    return (
      <React.Fragment>
        <Page className={`${modules.container}`}>

          <div className={`${modules.logo}`}>
            <img src={`${process.env.PUBLIC_URL}/assets/branding/Logo-AltDark.svg`} alt='The Midwest Asian American Students Union' />
          </div>
          
          {/* <video id='promo' className={`${modules.promo}`}> */}

          {/* </video> */}
          {/* <video id='test123' class='video-js' controls preload='auto' height='100px' width='100px' data-setup='{}'>
            <source src={`${process.env.PUBLIC_URL}/assets/vid/sc2020promoEmbed.mp4`} type='video/mp4'/>
            <p class='vjs-no-js'>
              To view this video please enable JavaScript, and consider upgrading to a web browser that
              <a href='https://videojs.com/html5-video-support/' target='_blank'>supports HTML5 video</a>
            </p>
          </video> */}

          <iframe id='promo' className={`${modules.promo}`}
            title='2020 Spring Conference: Unwritten - Teaser'
            src='https://www.youtube.com/embed/ZeyyS6RTG0M?autoplay=1&controls=0&loop=1&playlist=ZeyyS6RTG0M&disablekb=1&modestbranding=1&showinfo=0&autohide=0&enablejsapi=1&mute=1&rel=0'
            frameBorder='0'
            allow='autoplay;'
          ></iframe>

          <div className={`${modules.promoOverlay}`}>
          </div>

        </Page>
      </React.Fragment>
    );
  }
}

export default SC;