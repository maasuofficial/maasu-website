import React, { Component } from 'react';
import {
  Alumni,
  ApiaOrgs,
  Awards,
  Board,
  Contact,
  History,
  Home,
  Host,
  MaasuX,
  Members,
  Menu,
  Mission,
  NewsLetter,
  PastAwards,
  PastConf,
  Report,
  StaticFooter,
  Upcoming,
  WhereAreYouFrom,
} from './site';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Menu />

          <Route exact path='/' component={Home} />

          <Route path='/mission' component={Mission} />
          <Route path='/board' component={Board} />
          <Route path='/members' component={Members} />
          <Route path='/history' component={History} />
        
          <Route path='/upcoming' component={Upcoming} />
          <Route path='/host' component={Host} />

          <Route path='/maasux' component={MaasuX} />
          <Route path='/whereareyoufrom' component={WhereAreYouFrom} />

          <Route path='/awards' component={Awards} />
          <Route path='/apiaorgs' component={ApiaOrgs} />

          <Route path='/alumni' component={Alumni} />

          <Route path='/newsletter' component={NewsLetter} />
          <Route path='/report' component={Report} />
          <Route path='/pastconferences' component={PastConf} />
          <Route path='/pastawards' component={PastAwards} />

          <Route path='/contact' component={Contact} />

          <StaticFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
