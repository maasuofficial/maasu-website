import React, { Component } from 'react';
import { About, Alumni, Contact, Conferences, History, Home, Mission, Team } from './site';

class App extends Component {
    render() {
        return (
            <div className='app'>

                <Home />

                <About />
                <Mission />
                <Team />
                <History />

                <Conferences />

                <Alumni />

                <Contact />

            </div>
        );
    }
}

export default App;
