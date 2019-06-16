import React, { Component } from 'react';
import './App.scss';

import { Typography as Type } from './components';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <section className='page'>
                    <header>
                        <Type capitalized variant='heading1'>MAASU is <Type variant='em'>bold</Type> when making change.</Type>
                        <Type id='testid' className='test123 hello' variant='sub5'>MAASU pls dont captialize this</Type>
                    </header>

                    <span>maasu</span>
                </section>
                <section className='page'>
                    <span>maasu 2nd page</span>
                </section>
            </div>
        );
    }
}

export default App;
