import React, { Component } from 'react';

import { AspectRatioBox as ARBox, Cell, Grid, Page, Typography as Type } from './components';

class App extends Component {
    render() {
        return (
            <div className='app'>

                <Page>
                    <header>
                        <Type capitalized variant='heading1'>MAASU is <Type variant='em'>bold</Type> when making change.</Type>
                        <Type id='testid' className='test123 hello' variant='sub5'>MAASU landing page subtitle</Type>
                    </header>

                    <Grid style={{ height: '200px' }}>
                        <Cell auto sm={12}>a</Cell>
                        <Cell auto sm={12}>b</Cell>
                        <Cell auto sm={12}>c</Cell>
                    </Grid>


                    <ARBox className='testClass clss2' width='75%' resizeable style={{ border: '10px solid black', fontSize: '5em' }}>
                        So this is cool.
                        This is perhaps the coolest idea of all!
Thierry Koblentz recently wrote this up (Removing link as Thierry's site is dead.), crediting Sérgio Gomes for the idea.
                        To use it, you set a custom property scoped right to the element you need it on
                    </ARBox>
                    <ARBox style={{backgroundColor: 'skyblue'}} width='250px'>
                        <div style={{height: '50%', width: '100%', backgroundColor: 'red'}}></div>
                    </ARBox>
                    
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
