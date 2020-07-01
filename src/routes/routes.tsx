import React from 'react'
import { Router } from '@reach/router'
import { InvalidRoute } from 'routes/InvalidRoute'
import { PrivateRoute } from 'routes/PrivateRoute'

import { WrapperMenu, Contact } from 'containers'
import { AlumniContainer } from 'containers/AlumniContainer'
import { AnnualReportContainer } from 'containers/AnnualReportContainer'
import { AwardsContainer } from 'containers/AwardsContainer'
import { BoardContainer } from 'containers/BoardContainer'
import { BoardMemberContainer } from 'containers/BoardMemberContainer'
import { ConferencesContainer } from 'containers/ConferencesContainer'
import { DirectorsCouncilContainer } from 'containers/DirectorsCouncilContainer'
import {
  DonateContainer,
  DonateCompleteContainer,
} from 'containers/DonateContainer'
import { HomeContainer } from 'containers/HomeContainer'
import { HostContainer } from 'containers/HostContainer'
import { HxstoryContainer } from 'containers/HxstoryContainer'
import { MAAContainer } from 'containers/MAAContainer'
import { MAASUxContainer } from 'containers/MAASUxContainer'
import { MainContainer } from 'containers/MainContainer'
import { MembershipContainer } from 'containers/MembershipContainer'
import { MissionContainer } from 'containers/MissionContainer'
import { NewslettersContainer } from 'containers/NewslettersContainer'
import { ProgramContainer } from 'containers/ProgramContainer'
import { ResourcesContainer } from 'containers/ResourcesContainer'
import { WAYFComponent } from 'components/WAYFComponent'

export const Routes = () => {
  return (
    <Router className="posa h-100 t-0 r-0 b-0 l-0">
      <WrapperMenu path="/">
        <MainContainer path="/">
          <HomeContainer path="/" />

          <MissionContainer path="/mission" />

          <PrivateRoute
            isAuthorized={true}
            path="/board/:name"
            component={BoardMemberContainer}
          />
          <BoardContainer path="/board" />
          <MembershipContainer path="/membership" />
          <DirectorsCouncilContainer path="/directorscouncil" />

          <HxstoryContainer path="/hxstory" />
          <HxstoryContainer path="/history" />

          <HostContainer path="/host" />

          <MAASUxContainer path="/maasux" />
          <ProgramContainer path="/">
            <WAYFComponent path="/whereareyoufrom" />
          </ProgramContainer>

          <AwardsContainer path="/awards" />
          <ResourcesContainer path="/organizations" />

          <AlumniContainer path="/alumni" />

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
        </MainContainer>
      </WrapperMenu>
    </Router>
  )
}
