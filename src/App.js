import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BattleResultsPhotos from './components/pages/BattleResultsPhotos'
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
import BattleResults from './components/pages/BattleResults'
import BattlePost from './components/pages/BattlePost'
import ParticipantsVote from './components/pages/ParticipantsVote'
import ParticipantsPost from './components/pages/ParticipantsPost'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/battle-creation/deadline' component={CreationBattleDeadline} />
        <Route path='/battle-creation/rule' component={CreationBattleRule} />
        <Route path='/battle-creation/theme' component={CreationBattleTheme} />
        <Route path='/battle-creation/summary' component={CreationBattleSummary} />
        <Route path='/group-creation/group-created/:id' component={CreationSteps} />
        <Route exact path='/:username' component={MyProfile} />
        <Route exact path='/:username/groups' component={MyGroups} />
        <Route path='/:username/ranking' component={MyRanking} />
        <Route path='/:username/pictures' component={MyPictures} />
        <Route exact path='/:username/battles' component={MyBattles} />
        <Route path='/groups/:groupId/battles/:battleId/results' component={BattleResults} />
        <Route path='/groups/:groupId/battles/:battleId/results/photos' component={BattleResultsPhotos} />
        <Route path='/groups/:groupId/battles/:battleId/post-picture' component={BattlePost} />
        <Route path='/groups/:groupId/battles/:battleId/post-picture/participants' component={ParticipantsPost} />
        <Route path='/groups/:groupId/battles/:battleId/vote' component={BattleVote} />
        <Route path='/groups/:groupId/battles/:battleId/vote/participants' component={ParticipantsVote} />
      </Switch>
    </div>
  )
}

export default App
