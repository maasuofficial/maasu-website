import React, { Component } from 'react';
import {
  // Alumni,
  // ApiaOrgs,
  // Awards,
  // Board,
  // Contact,
  // History,
  Home,
  // Host,
  // MaasuX,
  // Members,
  // Menu,
  // Mission,
  // NewsLetter,
  // PastAwards,
  // PastConf,
  // Report,
  // StaticFooter,
  // Upcoming,
  // WhereAreYouFrom,
} from './site';
import { Page, Type } from './components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Switch>
            <Route path='/payment' component={Payment} />            
            <Route path='/' component={Home} />
          </Switch>

          {/* <Menu />

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

          <StaticFooter /> */}
        </div>
      </BrowserRouter>
    );
  }
}

const Payment = (props) => {
  return (
    <Page className='payment'>
      <Page className='paymentInner'>
        <Type cap variant='h2' className='title'>MAASU Membership</Type>
        <Type variant='sub6'>(you will be redirected to Paypal for secure payment confirmation)</Type>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
          <input name="cmd" type="hidden" value="_s-xclick"/><br/>
          <input name="hosted_button_id" type="hidden" value="PAC57KL3CTH2A"/><p></p>
          <table>
            <tbody>
              <tr>
                <td>
                  <p>MAASU offers three plans for membership:</p>
                  <select name="os0">
                    <option value="1 Year">1 Year $75.00 USD</option>
                    <option value="2 Years">2 Years $140.00 USD</option>
                    <option value="3 Years">3 Years $200.00 USD</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <input name="currency_code" type="hidden" value="USD"/><br/>
            <input alt="PayPal - The safer, easier way to pay online!" name="submit" src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" type="image"/><br/>
            <img src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" alt="" width="1" height="1" border="0"/>
          </p>
        </form>
      </Page>
    </Page>
  );
}

export default App;
