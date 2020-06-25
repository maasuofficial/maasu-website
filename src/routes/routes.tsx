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
  NewsLetter,
  PastAwards,
  // Upcoming,
  WhereAreYouFrom,
} from '../containers'
import { AnnualReportContainer } from 'containers/AnnualReportContainer'
import { ConferencesContainer } from 'containers/ConferencesContainer'
import { HomepageContainer } from 'containers/HomepageContainer'
import { InvalidRoute } from 'routes/InvalidRoute'
import { MAAContainer } from 'containers/MAAContainer'
import { MAASUxContainer } from 'containers/MAASUxContainer'
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

          <MAASUxContainer path="/maasux" />
          <WhereAreYouFrom path="/whereareyoufrom" />

          <Awards path="/awards" />
          <ApiaOrgs path="/apiaorgs" />

          <Alumni path="/alumni" />

          <PrivateRoute
            isAuthorized={false}
            path="/maa"
            component={MAAContainer}
          />

          <AnnualReportContainer path="/annual" />
          <NewsLetter path="/newsletter" />
          <PastAwards path="/pastawards" />
          <ConferencesContainer path="/conferences" />

          <Donate path="/donate" />
          <DonateComp path="/donate-complete" test={true} />
          <Contact path="/contact" />

          <InvalidRoute code={404} default />
        </HomepageContainer>
      </WrapperMenu>
    </Router>
  )
}
