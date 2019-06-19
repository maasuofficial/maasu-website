import React, { Component } from 'react';
import { AspectRatioBox as ARBox, Cell, Grid, Page, Typography as Type } from '../../components';
import './OurTeam.scss';

class OurTeam extends Component {
    render() {
        return (
            <Page>
                
                <header>
                    <Type capitalized variant='heading3'>Our Team</Type>
                </header>

                <ARBox className='profile'>
                    <Type capitalized variant='styled'>Name</Type>
                </ARBox>
                
                <ARBox className='profile' />
                <ARBox className='profile' />

            </Page>
        );
    }
}

export default OurTeam;