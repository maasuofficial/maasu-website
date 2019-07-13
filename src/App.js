import React, { Component } from 'react';
import { About, Alumni, Archives, Conferences, Home, Menu, Programs, Resources } from './site';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Menu />
        <Home />
        <About />
        <Conferences />
        <Programs />
        <Resources />
        <Alumni />
        <Archives />
      </div>
    );
  }
}

export default App;
