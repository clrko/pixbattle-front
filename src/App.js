import React from 'react'
import { Route, Switch } from 'react-router-dom'
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
import Podium from './components/pages/Podium'
import BattlePost from './components/pages/BattlePost'

const App = () => {
  return (
    <div>
      <MyGroups />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/battle-creation/deadline' component={CreationBattleDeadline} />
        <Route path='/battle-creation/rule' component={CreationBattleRule} />
        <Route path='/battle-creation/theme' component={CreationBattleTheme} />
        <Route path='/battle-creation/summary' component={CreationBattleSummary} />
        <Route path='/group-creation/group-created/:id' component={CreationSteps} />
        <Route exact path='/:username' component={MyProfile} />
        {/* <Route path='/:username/groups' component={MyGroups} /> */}
        <Route path='/:username/ranking' component={MyRanking} />
        <Route path='/:username/pictures' component={MyPictures} />
        <Route exact path='/:username/battles' component={MyBattles} />
        <Route path='/groups/:groupId/battles/:battleId/results' component={Podium} />
        <Route path='/groups/:groupId/battles/:battleId/post-picture' component={BattlePost} />
        <Route path='/groups/:groupId/battles/:battleId/vote' component={BattleVote} />
      </Switch>
    </div>
  )
}

export default App
