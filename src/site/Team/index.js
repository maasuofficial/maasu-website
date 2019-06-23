import React, { Component } from 'react';
import { AspectRatioBox as ARBox, Cell, Grid, Page, Typography as Type } from '../../components';
import './Team.scss';

class Team extends Component {
    render() {
        return (
            <Page>
                
                <header>
                    <Type capitalized variant='heading3'>Our Team</Type>
                </header>


                <Grid>
                    <Cell sm={12} auto>
                        <Profile
                            name='John'
                            position='Coordinator'
                            href='https://soundcloud.com'
                            src='https://via.placeholder.com/900'
                            alt='john'
                        />
                    </Cell>

                    <Cell sm={12} auto>
                        <Profile
                            name='John'
                            position='Coordinator'
                            href='https://soundcloud.com'
                            src='https://via.placeholder.com/900'
                            alt='john'
                        />    
                    </Cell>
                </Grid>

                <Grid>

                    {[...Array(20)].map((i, index) => 
                        <Cell sm={12} md={6} lg={4}
                            key={index}
                        >
                            <Profile
                                name='John'
                                position='Coordinator'
                                href='https://soundcloud.com'
                                src='https://via.placeholder.com/900'
                                alt='john'
                            />
                        </Cell>
                    )}
                </Grid>

            </Page>
        );
    }
}

const Profile = (props) => {
    let { alt, href, name, position, src } = props;
    
    href = href || '#';

    return (
        <ARBox className='profile'>
            <div>
                <Type className='name' capitalized variant='styled'>{name}</Type>
                <a href={href}>
                    <img src={src} alt={alt} />
                </a>
                <span className='position'>{position}</span>
            </div>
        </ARBox>
    );
}

export default Team;