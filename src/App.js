import React, { Component } from 'react';
import { Cell, Grid, Page, Type } from './components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route path='/payment' component={Payment} />            
            <Route path='/' component={Construction} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const Construction = (props) => {
  return (
    <Page className='construction'>
      <header>
        <Type variant='h1' className='title'><span>Oh no!</span></Type>
        <Type variant='h2' className='subtitle'>Our website is under construction!</Type>
      </header>
      <Type variant='sub6'>You can see any updates or conference information from our social media links:</Type>
      <Grid className='gridz'>
        <Cell auto>
          <a className='link' aria-label='facebook' href='https://www.facebook.com/MAASUForChange/'><FaFacebookSquare /></a>
          <a className='link' aria-label='instagram' href='https://www.instagram.com/maasuofficial/'><FaInstagram /></a>
        </Cell>
      </Grid>
      <Type variant='sub6'>For more information, please contact <a className='mail' href='mailto:technet@maasu.org'>technet@maasu.org</a>.</Type>
    </Page>
  );
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
