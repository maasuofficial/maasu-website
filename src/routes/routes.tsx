import React from 'react'
import { Router } from '@reach/router'
import {
  Home,
  WrapperMenu,
  Alumni,
  Contact,
  DC,
  WhereAreYouFrom,
} from '../containers'
import { AnnualReportContainer } from 'containers/AnnualReportContainer'
import { AwardsContainer } from 'containers/AwardsContainer'
import { BoardContainer } from 'containers/BoardContainer'
import { BoardMemberContainer } from 'containers/BoardMemberContainer'
import { ConferencesContainer } from 'containers/ConferencesContainer'
import {
  DonateContainer,
  DonateCompleteContainer,
} from 'containers/DonateContainer'
import { HomepageContainer } from 'containers/HomepageContainer'
import { HostContainer } from 'containers/HostContainer'
import { HxstoryContainer } from 'containers/HxstoryContainer'
import { InvalidRoute } from 'routes/InvalidRoute'
import { MAAContainer } from 'containers/MAAContainer'
import { MAASUxContainer } from 'containers/MAASUxContainer'
import { MembershipContainer } from 'containers/MembershipContainer'
import { MissionContainer } from 'containers/MissionContainer'
import { NewslettersContainer } from 'containers/NewslettersContainer'
import { PrivateRoute } from 'routes/PrivateRoute'
import { ResourcesContainer } from 'containers/ResourcesContainer'

export const Routes = () => {
  return (
    <Router className="posa h-100 t-0 r-0 b-0 l-0">
      <WrapperMenu path="/">
        <HomepageContainer path="/">
          <Home path="/" />

          <MissionContainer path="/mission" />

          <PrivateRoute
            isAuthorized={true}
            path="/board/:name"
            component={BoardMemberContainer}
          />
          <BoardContainer path="/board" />
          <MembershipContainer path="/membership" />
          <DC path="/directorscouncil" />

          <HxstoryContainer path="/hxstory" />
          <HxstoryContainer path="/history" />

          <HostContainer path="/host" />

          <MAASUxContainer path="/maasux" />
          <WhereAreYouFrom path="/whereareyoufrom" />

          <AwardsContainer path="/awards" />
          <ResourcesContainer path="/organizations" />

          <Alumni path="/alumni" />

          <PrivateRoute
            isAuthorized={false}
            path="/maa"
            component={MAAContainer}
          />

          <AnnualReportContainer path="/annual" />
          <NewslettersContainer path="/newsletter" />
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
