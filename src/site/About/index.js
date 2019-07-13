import React, { Component } from 'react';
import './About.scss';
import { Page } from '../../components';
import { Board, History, Members, PurposeAndMission } from '../';

class About extends Component {
  render() {
    return (
      <Page>
        <PurposeAndMission />
        <Board />
        <Members />
        <History />
      </Page>
    );
  }
}

export default About;