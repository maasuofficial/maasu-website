import React, { Component } from 'react';
import './App.scss';

import { Cell, Grid, Page, Typography as Type } from './components';

class App extends Component {
    render() {
        return (
            <div className='app'>

                <Page>
                    <header>
                        <Type capitalized variant='heading1'>MAASU is <Type variant='em'>bold</Type> when making change.</Type>
                        <Type id='testid' className='test123 hello' variant='sub5'>MAASU landing page subtitle</Type>
                    </header>

                    <Grid style={{border: '1px solid black'}}>
                        <Cell sm={5} style={{ border: '1px solid red'}}>this is a cell</Cell>
                        <Cell sm={1} style={{ border: '1px solid red'}}>this is a cell</Cell>
                        <Cell sm={6} style={{ border: '1px solid red'}}>this is a cell</Cell>
                        <Cell sm={12} style={{ border: '1px solid red'}}>this is a cell</Cell>
                    </Grid>
                    
                </Page>

                <Page>
                    <Type variant='heading3'>Our Mission</Type>
                    <span>2nd page content</span>
                </Page>

            </div>
        );
    }
}

export default App;
