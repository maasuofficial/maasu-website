import React, { Component } from 'react';
// import { About, Alumni, Conferences, Home, Programs, Resources } from './site';
import { Cell, Grid, Page, Type } from './components';
// import Icon from 'react-fontawesome';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const styles = {
  title: {
    margin: 0,
    padding: '2em 0 1em 0',
  },
  subtitle: {
    margin: 0,
  },
  grid: {
    fontSize: '3em',
    padding: '1em 0',
  },
  a: {
    padding: '0 0.2em',
    color: 'inherit',
  },
  mail: {
    color: 'inherit',
    textDecoration: 'underline',
  }
}

class App extends Component {
  render() {
    return (
      <div className='app'>

        <Page>
          <header>
            <Type variant='h1' style={styles.title}>Oh no!</Type>
            <Type variant='h2' style={styles.subtitle}>Our website is under construction!</Type>
          </header>
          <Type variant='sub6'>You can see any updates or conference information from our social media links:</Type>
          <Grid style={styles.grid}>
            <Cell auto>
              <a style={styles.a} aria-label='facebook' href='https://www.facebook.com/MAASUForChange/'><FaFacebookSquare /></a>
              <a style={styles.a} aria-label='instagram' href='https://www.instagram.com/maasuofficial/'><FaInstagram /></a>
            </Cell>
          </Grid>
          <Type variant='sub6'>For more information, please contact <a style={styles.mail} href='mailto:technet@maasu.org'>technet@maasu.org</a>.</Type>
        </Page>
        
        {/* <Home />
        <About />
        <Conferences />
        <Programs />
        <Resources />
        <Alumni /> */}
        
      </div>
    );
  }
}

export default App;
