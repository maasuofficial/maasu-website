import React from 'react';
import { ARBox, BImg, Cell, Grid, Page, Type } from '../../components';
import { FaChevronLeft } from 'react-icons/fa';
import modules from './Board.module.scss';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.toggleExpansion = this.toggleExpansion.bind(this);
    this.toggleContraction = this.toggleContraction.bind(this);

    this.state = { expanded: false };
  }
  componentDidMount() {
    document.title = 'Executive Board - The Midwest Asian American Students Union';
  }

  toggleExpansion(e) {
    e.preventDefault();
    const profileInfo = e.currentTarget.nextSibling;

    // add class in callback or else rerender will overwrite added classes
    this.setState({ expanded: true }, 
      () => profileInfo.classList.add(modules.priority));
  }

  toggleContraction(e) {
    e.preventDefault();
    const profileInfo = e.currentTarget.parentNode;

    this.setState({ expanded: false }, 
      () => profileInfo.classList.remove(modules.priority));
  }

  render() {
    const { expanded } = this.state;

    return (
      <div className={`${modules.pageContainer} ${expanded ? modules.expanded : ''}`}>
        <Page>
          <Type variant='h2'>Executive Coordinating Committee</Type>
          
          <Grid>

            {[...Array(10)].map((i, index) => 
              <Cell key={index} auto sm={6} md={4} lg={3}><ARBox className={`${modules.profileContainer}`} resizeable>              
                <a href='/'
                  className={`${modules.profileTrigger}`}
                  onClick={this.toggleExpansion}
                  aria-label='profile link'
                  aria-expanded={expanded}
                >
                  <div className={`${modules.profile}`}>
                    <BImg src={`${process.env.PUBLIC_URL}/assets/img/profiles/ElaineChen.jpg`} alt='Elaine Chen' />
                    <Type variant='sub5'>Elaine Chen</Type>
                    <span>Chair</span>
                  </div>
                </a>
  
                <div className={`${modules.profileInfo} ${expanded ? modules.expanded : ''}`}>
                  <a href='/' className={`${modules.close}`} onClick={this.toggleContraction}>
                    <FaChevronLeft />
                  </a>

                  <Type variant='h1'>index {index}</Type>

                </div>
  
              </ARBox></Cell>
            )}

            <Cell auto sm={6} md={4} lg={3}><ARBox resizeable>
              <div className={`${modules.profile}`}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/profiles/ElaineChen.jpg`} alt='Elaine Chen' />
                <Type variant='text4'>Elaine Chen</Type>
                <br />
                <span>Chair</span>
                <br />
                <a href='mailto:chair@maasu.org'>chair@maasu.org</a>
              </div>
            </ARBox></Cell>

            <Cell auto sm={6} md={4} lg={3}><ARBox resizeable>
              <div className={`${modules.profile}`}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/profiles/JordanPeyton.jpg`} alt='Jordan Peyton' />
                <Type variant='text4'>Jordan Peyton</Type>
                <br />
                <span>Secretary</span>
                <br />
                <a href='mailto:ecc@maasu.org'>ecc@maasu.org</a>
              </div>
            </ARBox></Cell>

            <Cell auto sm={6} md={4} lg={3}><ARBox resizeable>
              <div className={`${modules.profile}`}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/profiles/KristieLam.jpg`} alt='Kristie Lam' />
                <Type variant='text4'>Kristie Lam</Type>
                <br />
                <span>Advocacy</span>
                <br />
                <a href='mailto:advocacy@maasu.org'>advocacy@maasu.org</a>
              </div>
            </ARBox></Cell>

            <Cell auto sm={6} md={4} lg={3}><ARBox resizeable>
              <div className={`${modules.profile}`}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/profiles/NhuNguyen.jpg`} alt='Nhu Nguyen' />
                <Type variant='text4'>Nhu Nguyen</Type>
                <br />
                <span>Advocacy</span>
                <br />
                <a href='mailto:advocacy@maasu.org'>advocacy@maasu.org</a>
              </div>
            </ARBox></Cell>

            <Cell auto sm={6} md={4} lg={3}><ARBox resizeable>
              <div className={`${modules.profile}`}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/profiles/MichaelJobson.jpg`} alt='Michael Daehyun Jobson' />
                <Type variant='text4'>Michael Daehyun Jobson</Type>
                <br />
                <span>Communications</span>
                <br />
                <a href='mailto:communications@maasu.org'>communications@maasu.org</a>
              </div>
            </ARBox></Cell>

            <Cell auto sm={6} md={4} lg={3}><ARBox resizeable>
              <div className={`${modules.profile}`}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/profiles/AnnieLe.jpg`} alt='Annie Le' />
                <Type variant='text4'>Annie Le</Type>
                <br />
                <span>Membership Outreach</span>
                <br />
                <a href='mailto:memoutreach@maasu.org'>memoutreach@maasu.org</a>
              </div>
            </ARBox></Cell>

            <Cell auto sm={6} md={4} lg={3}><ARBox resizeable>
              <div className={`${modules.profile}`}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/profiles/KattLee.jpg`} alt='Katt Lee' />
                <Type variant='text4'>Katt Lee</Type>
                <br />
                <span>Programming</span>
                <br />
                <a href='mailto:programming@maasu.org'>programming@maasu.org</a>
              </div>
            </ARBox></Cell>

            <Cell auto sm={6} md={4} lg={3}><ARBox resizeable>
              <div className={`${modules.profile}`}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/profiles/JennyVu.jpg`} alt='Jenny Vu' />
                <Type variant='text4'>Jenny Vu</Type>
                <br />
                <span>Programming</span>
                <br />
                <a href='mailto:programming@maasu.org'>programming@maasu.org</a>
              </div>
            </ARBox></Cell>

            <Cell auto sm={6} md={4} lg={3}><ARBox resizeable>
              <div className={`${modules.profile}`}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/profiles/AliceYu.jpg`} alt='Alice Yu' />
                <Type variant='text4'>Alice Yu</Type>
                <br />
                <span>Public Relations</span>
                <br />
                <a href='mailto:pr@maasu.org'>pr@maasu.org</a>
              </div>
            </ARBox></Cell>

            <Cell auto sm={6} md={4} lg={3}><ARBox resizeable>
              <div className={`${modules.profile}`}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/profiles/SamBossley.jpg`} alt='Sam Bossley' />
                <Type variant='text4'>Sam Bossley</Type>
                <br />
                <span>Technical Networking</span>
                <br />
                <a href='mailto:technet@maasu.org'>technet@maasu.org</a>
              </div>
            </ARBox></Cell>

          </Grid>

          <p>
            Executive Coordinating Committee Applications for the 2019-2020 academic year will be open in Spring 2019.
          </p>
        </Page>
        <Page>
          <Type variant='h2'>Executive Director</Type>

          <Grid>
            <Cell auto sm={6} md={4} lg={3}><ARBox resizeable>
              <div className={`${modules.profile}`} >
                <img src={`${process.env.PUBLIC_URL}/assets/img/profiles/VictoriaYu.jpg`} alt='Victoria Yu' />
                <Type variant='text4'>Victoria Yu</Type>
                <br />
                <span>Executive Director</span>
                <br />
                <a href='mailto:execdirector@maasu.org'>execdirector@maasu.org</a>
              </div>
            </ARBox></Cell>
          </Grid>
        </Page>
        <Page>
          <Type variant='h2'>Directors Council</Type>

          <Grid>

            <Cell auto sm={6} md={4} lg={3}><ARBox resizeable>
              <div className={`${modules.profile}`}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/profiles/JamesLiu.jpg`} alt='James Liu' />
                <Type variant='text4'>James Liu</Type>
                <br />
                <span>Director of Alumni Relations</span>
                <br />
                <a href='mailto:directorscouncil@maasu.org'>directorscouncil@maasu.org</a>
              </div>
            </ARBox></Cell>

            <Cell auto sm={6} md={4} lg={3}><ARBox resizeable>
              <div className={`${modules.profile}`}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/profiles/JessicaLee.jpg`} alt='Jessica Lee' />
                <Type variant='text4'>Jessica Lee</Type>
                <br />
                <span>Director of Finance and Partnerships</span>
                <br />
                <a href='mailto:directorscouncil@maasu.org'>directorscouncil@maasu.org</a>
              </div>
            </ARBox></Cell>

            <Cell auto sm={6} md={4} lg={3}><ARBox resizeable>
              <div className={`${modules.profile}`}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/profiles/DavidLee.jpg`} alt='David Lee' />
                <Type variant='text4'>David Lee</Type>
                <br />
                <span>Director of Programs and Assessments</span>
                <br />
                <a href='mailto:directorscouncil@maasu.org'>directorscouncil@maasu.org</a>
              </div>
            </ARBox></Cell>

          </Grid>

          <p>
            Applications for the Directors Council are currently closed. 
            The next application cycle will be in Spring of 2021.
          </p>

        </Page>
        <Page>
          <Type variant='h2'>Board of Advisors</Type>
          <Grid>

            <Cell auto sm={6} md={4} lg={3}><ARBox resizeable>
              <div className={`${modules.profile}`}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/profiles/CledaWang.jpg`} alt='Cleda Wang' />
                <Type variant='text4'>Cleda Wang</Type>
                <br />
                <span>Advisor</span>
                {/* <br />
                <a href='mailto:directorscouncil@maasu.org'>directorscouncil@maasu.org</a> */}
              </div>
            </ARBox></Cell>

            <Cell auto sm={6} md={4} lg={3}><ARBox resizeable>
              <div className={`${modules.profile}`}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/profiles/LindaLuk.jpg`} alt='Linda Luk' />
                <Type variant='text4'>Linda Luk</Type>
                <br />
                <span>Advisor</span>
                {/* <br />
                <a href='mailto:directorscouncil@maasu.org'>directorscouncil@maasu.org</a> */}
              </div>
            </ARBox></Cell>

          </Grid>
          <p>
            Applications for the Board of Advisors are currently closed. 
          </p>
        </Page>
        <div className='footerSpace'></div>
      </div>
    );
  }
}

export default Board;