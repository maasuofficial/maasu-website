import React, { Component } from 'react';
import './About.scss';
import { Page } from '../../components';
import { Board, History, Members, Mission } from '../';

class About extends Component {
  render() {
    return (
      <Page>
        <Mission />
        <Board />
        <Members />
        <History />
      </Page>
    );
  }
}

export default About;