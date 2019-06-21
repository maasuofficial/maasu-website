import React, { Component } from 'react';

import { Home, OurTeam } from './site';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Home />
                <OurTeam />
            </div>
        );
    }
}

export default App;
