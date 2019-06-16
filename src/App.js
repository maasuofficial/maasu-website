import React, { Component } from 'react';
import './App.scss';

import { Page, Typography as Type } from './components';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Page>
                    <header>
                        <Type capitalized variant='heading1'>MAASU is <Type variant='em'>bold</Type> when making change.</Type>
                        <Type id='testid' className='test123 hello' variant='sub5'>MAASU pls dont captialize this</Type>
                    </header>

                    <span>maasu</span>
                </Page>
                <Page>
                    <span>maasu 2nd page</span>
                </Page>
            </div>
        );
    }
}

export default App;
