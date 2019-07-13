import React, { Component } from 'react';
// import { About, Alumni, Conferences, Home, Programs, Resources } from './site';
import { Page, Type } from './components';

const styles = {
  title: {
    margin: 0,
    padding: '2em 0 1em 0',
  },
  subtitle: {
    margin: 0,
  }
}

class App extends Component {
  render() {
    return (
      <div className='app'>

        <Page>
          <header>
            <Type variant='h1' style={styles.title}>Oh no!</Type>
            <Type variant='h2' style={styles.subtitle}>Our website is under construction...</Type>
          </header>
          <Type variant='sub6'>You can see any updates or conference information from our social media links:</Type>
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
