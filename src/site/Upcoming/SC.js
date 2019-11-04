import React from 'react';
import { Page } from '../../components';
import './SC.scss';
import modules from './SC.module.scss';
import { ControlBar, Player } from 'video-react';

class SC extends React.Component {
  componentDidMount() {
    this.player.subscribeToStateChange(this.handlePlayerStateChange.bind(this));
  }

  handlePlayerStateChange(state, prevState) {
    if (state.ended) this.player.play();
  }

  render() {
    return (
      <React.Fragment>
        <Page className={`${modules.container}`}>

          <div className={`${modules.logo}`}>
            <img src={`${process.env.PUBLIC_URL}/assets/branding/Logo-AltDark.svg`} alt='The Midwest Asian American Students Union' />
          </div>

          <div className='promoContainer'>
            <Player
              muted
              playsInline
              autoPlay
              src={`${process.env.PUBLIC_URL}/assets/vid/sc2020promo.mp4`}
              ref={(player) => this.player = player }
            >
              <ControlBar disableCompletely={true} disableDefaultControls={true} autoHideTime={0} autoHide={true} />
            </Player>
          </div>

          <div className={`${modules.promoOverlay}`}>
            <div className={`${modules.promoContent}`}>
              <h2>
                <p>2020 MAASU Spring Conference</p>
                <em className={`${modules.golden}`}>Unwritten</em>
                <p>March 20-22nd</p>
                <p className={`${modules.note}`}>
                  <a target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/watch?v=-MILXrpn7fY'>
                    See the promotional video
                  </a>
                </p>
              </h2>
            </div>
          </div>

        </Page>
      </React.Fragment>
    );
  }
}

export default SC;