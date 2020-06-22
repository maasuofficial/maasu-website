import React from 'react'
import { Router } from '@reach/router'
import {
  Home,
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
  NewsLetter,
  PastAwards,
  PastConf,
  // Upcoming,
  WhereAreYouFrom,
} from '../containers'
import { HomepageContainer } from 'containers/HomepageContainer'
import { InvalidRoute } from 'routes/InvalidRoute'
import { MAAContainer } from 'containers/MAAContainer'
import { MembershipContainer } from 'containers/MembershipContainer'
import { MissionContainer } from 'containers/MissionContainer'
import { PrivateRoute } from 'routes/PrivateRoute'

export const Routes = () => {
  return (
    <Router className="posa h-100 t-0 r-0 b-0 l-0">
      <WrapperMenu path="/">
        <HomepageContainer path="/">
          <Home path="/" />

          <MissionContainer path="/mission" />
          <Board path="/board/:name" />
          <Board path="/board" />
          <MembershipContainer path="/membership" />
          <DC path="/directorscouncil" />
          <History path="/history" />

          {/* <Upcoming path="/upcoming" /> */}
          <Host path="/host" />

          <MaasuX path="/maasux" />
          <WhereAreYouFrom path="/whereareyoufrom" />

          <Awards path="/awards" />
          <ApiaOrgs path="/apiaorgs" />

          <Alumni path="/alumni" />

          <PrivateRoute
            isAuthorized={false}
            path="/maa"
            component={MAAContainer}
          />

          <NewsLetter path="/newsletter" />
          <PastAwards path="/pastawards" />
          <PastConf path="/pastconferences" />

          <Donate path="/donate" />
          <DonateComp path="/donate-complete" test={true} />
          <Contact path="/contact" />

          <InvalidRoute code={404} default />
        </HomepageContainer>
      </WrapperMenu>
    </Router>
  )
}
