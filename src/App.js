import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BattleResultsPhotos from './components/pages/BattleResultsPhotos'
import BattlePost from './components/pages/BattlePost'
import BattleResults from './components/pages/BattleResults'
import BattleVote from './components/pages/BattleVote'
import CreationBattleDeadline from './components/pages/CreationBattleDeadline'
import CreationBattleRule from './components/pages/CreationBattleRule'
import CreationBattleTheme from './components/pages/CreationBattleTheme'
import CreationBattleSummary from './components/pages/CreationBattleSummary'
import CreationSteps from './components/pages/CreationSteps'
import LandingPage from './components/pages/LandingPage'
import MyBattles from './components/pages/MyBattles'
import MyGroups from './components/pages/MyGroups'
import MyProfile from './components/pages/MyProfile'
import MyPictures from './components/pages/MyPictures'
import MyRanking from './components/pages/MyRanking'
import ParticipantsVote from './components/pages/ParticipantsVote'
import ParticipantsPost from './components/pages/ParticipantsPost'
import PrivateRoute from './components/shared/PrivateRoute'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <PrivateRoute path='/battle-creation/deadline' component={CreationBattleDeadline} />
        <PrivateRoute path='/battle-creation/rule' component={CreationBattleRule} />
        <PrivateRoute path='/battle-creation/theme' component={CreationBattleTheme} />
        <PrivateRoute path='/battle-creation/summary' component={CreationBattleSummary} />
        <PrivateRoute path='/group-creation/group-created/:id' component={CreationSteps} />
        <PrivateRoute exact path='/:username' component={MyProfile} />
        <PrivateRoute exact path='/:username/groups' component={MyGroups} />
        <PrivateRoute path='/:username/ranking' component={MyRanking} />
        <PrivateRoute path='/:username/pictures' component={MyPictures} />
        <PrivateRoute exact path='/:username/battles' component={MyBattles} />
        <PrivateRoute exact path='/groups/:groupId/battles/:battleId/results' component={BattleResults} />
        <PrivateRoute path='/groups/:groupId/battles/:battleId/results/photos' component={BattleResultsPhotos} />
        <PrivateRoute path='/groups/:groupId/battles/:battleId/post-picture' component={BattlePost} />
        <PrivateRoute path='/groups/:groupId/battles/:battleId/post-picture/participants' component={ParticipantsPost} />
        <PrivateRoute path='/groups/:groupId/battles/:battleId/vote' component={BattleVote} />
        <PrivateRoute path='/groups/:groupId/battles/:battleId/vote/participants' component={ParticipantsVote} />
      </Switch>
    </div>
  )
}

export default App
