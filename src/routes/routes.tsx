import React from 'react'
import { Router } from '@reach/router'
import {
  Home,
  Mission,
  WrapperMenu,
  Alumni,
  ApiaOrgs,
  Awards,
  Board,
  Contact,
  Donate,
  DonateComp,
  DC,
  History,
  Host,
  MaasuX,
  Members,
  NewsLetter,
  PastAwards,
  PastConf,
  Upcoming,
  WhereAreYouFrom,
} from '../containers'

export const Routes = () => {
  return (
    <Router className="posa h-100 t-0 r-0 b-0 l-0">
      <WrapperMenu path="/">
        <Home path="/" />

        <Mission path="/mission" />
        <Board path="/board/:name" />
        <Board path="/board" />
        <Members path="/members" />
        <Members path="/membership" />
        <DC path="/directorscouncil" />
        <History path="/history" />

        <Upcoming path="/upcoming" />
        <Host path="/host" />

        <MaasuX path="/maasux" />
        <WhereAreYouFrom path="/whereareyoufrom" />

        <Awards path="/awards" />
        <ApiaOrgs path="/apiaorgs" />

        <Alumni path="/alumni" />
        <Alumni path="/maa" />

        <NewsLetter path="/newsletter" />
        <PastAwards path="/pastawards" />
        <PastConf path="/pastconferences" />

        <Donate path="/donate" />
        <DonateComp path="/donate-complete" test={true} />
        <Contact path="/contact" />

        <Home default />
      </WrapperMenu>
    </Router>
  )
}
