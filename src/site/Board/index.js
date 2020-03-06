import React from 'react';
import { ARBox, BImg, Cell, Grid, Page, Type } from '../../components';
import { FaArrowLeft } from 'react-icons/fa';
import modules from './Board.module.scss';
import data from './data.json';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.generateProfiles = this.generateProfiles.bind(this);
    this.toggleExpansion = this.toggleExpansion.bind(this);
    this.toggleContraction = this.toggleContraction.bind(this);

    let profile = this.props.location.pathname.replace('/board', '').replace('/', '');
    let names = Object.values(data).map((i) => i.nameConcatenated);

    this.state = {
      expanded: names.indexOf(profile) !== -1,
      profile,
    };

  }
  componentDidMount() {
    document.title = 'Executive Board - The Midwest Asian American Students Union';
  }

  generateProfiles(arr) {
    const { expanded } = this.state;

    return arr.map((p, index) => {
      let isExpProfile = p.nameConcatenated.toLowerCase() === this.state.profile.toLowerCase();
      let expTabIndex = isExpProfile ? 0 : -1;
      let expClasses = isExpProfile ? `${modules.priority} ${modules.expanded}` : '';

      return (
        <Cell key={index} auto sm={6} md={4} lg={3}><ARBox className={`${modules.profileContainer}`} resizeable>
          <a href='/'
            tabIndex={expanded ? -1 : 0}
            className={`${modules.profileTrigger}`}
            onClick={this.toggleExpansion}
            aria-label='profile link'
            aria-expanded={expanded}
            >
            <div className={`${modules.profile}`}>
              <BImg src={`${process.env.PUBLIC_URL}/assets/img/profiles/${p.nameConcatenated}.jpg`} alt={p.name} />
              <Type variant='sub5'>{p.name}</Type>
              <span>{p.position}</span>
            </div>
          </a>

          <Page className={`${modules.profileInfo} ${expClasses}`} name={p.nameConcatenated}>
            <Type variant='h2'>{p.name}</Type>

            <a href='/' 
              tabIndex={expTabIndex}
              className={`${modules.close}`} 
              onClick={this.toggleContraction}
              ><FaArrowLeft /></a>

            <BImg src={`${process.env.PUBLIC_URL}/assets/img/profiles/${p.nameConcatenated}.jpg`} alt={p.name} />
            <Type variant='text3'>{p.position}</Type>
            <br />

            {p.email && <a tabIndex={expTabIndex} href={`mailto:${p.email}`}>{p.email}</a>}

            {p.positionRole && <p>{p.positionRole}</p>}

            {p.personalGoal && <span>
              <b>What is your personal goal this year?</b>
              <p>{p.personalGoal}</p>
            </span>}

            {p.favoriteSong && <span>
              <b>Favorite song?</b>
              <p>{p.favoriteSong}</p>
            </span>}

            {p.favoriteMeme && <span>
              <b>Favorite meme?</b>
              <p>{p.favoriteMeme}</p>
            </span>}

            <div className='footerSpace'></div>
          </Page>

        </ARBox></Cell>
      )
    });
  }

  toggleExpansion(e) {
    e.preventDefault();
    const profileInfo = e.currentTarget.nextSibling;
    const name = profileInfo.getAttribute('name');

    // add class in callback or else rerender will overwrite added classes
    this.setState({ expanded: true }, () => {
      profileInfo.classList.add(modules.priority, modules.expanded);
      let unfocusedElems = profileInfo.querySelectorAll('[tabIndex="-1"]');
      unfocusedElems.forEach((el) => el.setAttribute('tabIndex', '0'));
      this.props.history.replace(`/board/${name}`);
    });
  }

  toggleContraction(e) {
    e.preventDefault();
    const profileInfo = e.currentTarget.parentNode;

    this.setState({ expanded: false }, () => {
      profileInfo.classList.remove(modules.priority, modules.expanded)
      let unfocusedElems = profileInfo.querySelectorAll('[tabIndex="0"]');
      unfocusedElems.forEach((el) => el.setAttribute('tabIndex', '-1'));
      this.props.history.replace('/board');
    });
  }

  render() {
    let groups = data.reduce((acc, val) => {
      const key = val.type;

      if (!acc[key]) acc[key] = [];

      acc[key].push(val);
      return acc;
    }, {});

    return (
      <div className={`${modules.pageContainer} ${this.state.expanded ? modules.expanded : ''}`}>
        <Page className={`${modules.groupPage}`}>
          <Type variant='h2'>Executive Coordinating Committee</Type>
          <Grid>{this.generateProfiles(groups['ECC'])}</Grid>
          <p>
            Executive Coordinating Committee Applications for the 2020-2021 academic year are now open! Apply <a href="https://docs.google.com/forms/d/e/1FAIpQLScEnc2J5D-Yjqw7L-EWiDESrOTrppV1eEHjHH49Nf1JrCfx8w/viewform">here</a>. Applications close February 29th.
          </p>
        </Page>
        <Page className={`${modules.groupPage}`}>
          <Type variant='h2'>Executive Director</Type>
          <Grid>{this.generateProfiles(groups['ED'])}</Grid>
          <p>
            Applications for the Executive Director are currently open! Apply <a download href={`${process.env.PUBLIC_URL}/assets/files/MAASU-ED-Application-2020-2022-new.docx`}>here</a>. Applications close <b>Friday, March 27th</b>.
          </p>
        </Page>
        <Page className={`${modules.groupPage}`}>
          <Type variant='h2'>Directors Council</Type>
          <Grid>{this.generateProfiles(groups['DC'])}</Grid>
          <p>
            Applications for the Directors Council are currently closed. 
            The next application cycle will be in Spring of 2021.
          </p>
        </Page>
        <Page className={`${modules.groupPage}`}>
          <Type variant='h2'>Board of Advisors</Type>
          <Grid>{this.generateProfiles(groups['BOA'])}</Grid>
          <p>
            Applications for the Board of Advisors are currently open! Apply <a download href={`${process.env.PUBLIC_URL}/assets/files/BOA-Application.docx`}>here</a>.
          </p>
        </Page>
        <div className='footerSpace'></div>
      </div>
    );
  }
}

export default Board;
