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
  DC,
  History,
  NewsLetter,
  WhereAreYouFrom,
} from '../containers'
import { AnnualReportContainer } from 'containers/AnnualReportContainer'
import { BoardMemberContainer } from 'containers/BoardMemberContainer'
import { ConferencesContainer } from 'containers/ConferencesContainer'
import {
  DonateContainer,
  DonateCompleteContainer,
} from 'containers/DonateContainer'
import { HomepageContainer } from 'containers/HomepageContainer'
import { HostContainer } from 'containers/HostContainer'
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

          <PrivateRoute
            isAuthorized={false}
            path="/board/:name"
            component={BoardMemberContainer}
          />
          <Board path="/board" />

          <MembershipContainer path="/membership" />
          <DC path="/directorscouncil" />
          <History path="/history" />

          <HostContainer path="/host" />

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
          <ConferencesContainer path="/conferences" />

          <DonateContainer path="/donate" />
          <DonateCompleteContainer path="/donate-complete" />
          <Contact path="/contact" />

          <InvalidRoute code={404} default />
        </HomepageContainer>
      </WrapperMenu>
    </Router>
  )
}
