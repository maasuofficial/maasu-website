import React from 'react';
import { Type, Grid, Cell, Page, Pressable } from '../../components';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import modules from './LS.module.scss';

const LS = (props) => {
  return (
    <React.Fragment>
      <div className={`${modules.sky}`}>
        <div className={`${modules.background}`}>
          <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/sky.jpg)` }}></div>
          <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/sky.jpg)` }}></div>
        </div>
      </div>

      <Page className={`${modules.content}`}>
        <img src={`${process.env.PUBLIC_URL}/assets/branding/Logo-wSymbol.svg`} alt='The Midwest Asian American Students Union' />
        <header>
          <Type cap variant='sub2'>Leadership Summit 2019:</Type>
          <Type cap variant='h1'><i className={`${modules.conferenceName}`}>Take Flight</i></Type>
        </header>

        <Type variant='sub4'>October 18-19th | Wichita, KS</Type>

        <Pressable className={`${modules.register}`} href='https://docs.google.com/forms/d/e/1FAIpQLSeMjvyZph0ZH5V6Wj1rNxdC-SYGvW2dEE5qTojb-jkM3W-X7A/viewform?fbclid=IwAR0TQoNVBSShC-sXRnb96rZMFZSX3tAzNxV-NnrXeSsFEfdcKYFP5HZUwSo'>
          <Type cap variant='text2'>Register Now!</Type>
        </Pressable>

        
        <Grid className={`${modules.socialplugs}`}>
          <Cell auto>
            <a className={`${modules.link}`} aria-label='facebook' href='https://www.facebook.com/MAASUForChange/'><FaFacebookSquare /></a>
            <a className={`${modules.link}`} aria-label='instagram' href='https://www.instagram.com/maasuofficial/'><FaInstagram /></a>
          </Cell>
        </Grid>  
       

      </Page>
    </React.Fragment>
  )
}

export default LS;