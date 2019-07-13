import React, { Component } from 'react';
import { About, Alumni, Archives, Conferences, Home, Menu, Programs, Resources } from './site';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Menu />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/conferences' component={Conferences} />
          <Route path='/programs' component={Programs} />
          <Route path='/resources' component={Resources} />
          <Route path='/alumni' component={Alumni} />
          <Route path='/archives' component={Archives} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
