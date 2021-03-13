import React from 'react'
import { Router } from '@reach/router'
import { InvalidRoute } from 'routes/InvalidRoute'
import { PrivateRoute } from 'routes/PrivateRoute'

import { AlumniContainer } from 'containers/AlumniContainer'
import { AnnualReportsContainer } from 'containers/AnnualReportsContainer'
import { AwardsContainer } from 'containers/AwardsContainer'
import { BoardContainer } from 'containers/BoardContainer'
import { BoardOfAdvisorsComponent } from 'components/BoardOfAdvisorsComponent'
import { BoardMemberContainer } from 'containers/BoardMemberContainer'
import { ConferencesContainer } from 'containers/ConferencesContainer'
import { ConferenceInfoComponent } from 'components/ConferenceInfoComponent'
import { ContactContainer } from 'containers/ContactContainer'
import { DirectorsCouncilContainer } from 'containers/DirectorsCouncilContainer'
import {
  DonateContainer,
  DonateCompleteContainer,
} from 'containers/DonateContainer'
/* import { HomeContainer } from 'containers/HomeContainer' */
import { HostContainer } from 'containers/HostContainer'
import { HxstoryContainer } from 'containers/HxstoryContainer'
import { MAAContainer } from 'containers/MAAContainer'
import { MAASUxContainer } from 'containers/MAASUxContainer'
import { MainContainer } from 'containers/MainContainer'
import { MembershipContainer } from 'containers/MembershipContainer'
import { MissionContainer } from 'containers/MissionContainer'
import { NewslettersContainer } from 'containers/NewslettersContainer'
import { PostRequestComponent } from 'components/PostRequestComponent'
import { ProgramContainer } from 'containers/ProgramContainer'
import { ResourcesContainer } from 'containers/ResourcesContainer'
import { WAYFComponent } from 'components/WAYFComponent'

export const Routes = () => {
  return (
    <Router primary={false} className="posa h-100 t-0 r-0 b-0 l-0">
      <MainContainer path="/">
        {/* <HomeContainer path="/" /> */}
        <MissionContainer path="/" />

        <MissionContainer path="/mission" />

        <PrivateRoute
          isAuthorized={true}
          path="/board/:name"
          component={BoardMemberContainer}
        />
        <BoardContainer path="/board" />
        <MembershipContainer path="/membership" />
        <DirectorsCouncilContainer path="/dc" />
        <BoardOfAdvisorsComponent path="/boa" />

        <HxstoryContainer path="/hxstory" />
        <HxstoryContainer path="/history" />

        <ConferenceInfoComponent path="/conference-info" />
        <HostContainer path="/host" />
        <ConferencesContainer path="/conferences" />

        <ProgramContainer path="/programs">
          <MAASUxContainer path="/maasux" />
          <WAYFComponent path="/whereareyoufrom" />
        </ProgramContainer>

        <AwardsContainer path="/awards" />
        <ResourcesContainer path="/organizations" />

        <AlumniContainer path="/alumni" />

        <MAAContainer path="/maa/*" />

        <AnnualReportsContainer path="/annual" />
        <NewslettersContainer path="/newsletter" />

        <DonateContainer path="/donate" />
        <DonateCompleteContainer path="/donate-complete" />
        <ContactContainer path="/contact" />

        <PostRequestComponent path="/pr" />

        <InvalidRoute code={404} default />
      </MainContainer>
    </Router>
  )
}
