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
import PostPicture from './components/pages/PostPicture'
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
        <PrivateRoute path='/:username/groups' component={MyGroups} />
        <PrivateRoute path='/:username/ranking' component={MyRanking} />
        <PrivateRoute path='/:username/pictures' component={MyPictures} />
        <PrivateRoute exact path='/:username/battles' component={MyBattles} />
        <PrivateRoute path='/:username/battles/:id/results' component={Podium} />
        <PrivateRoute path='/battles/:id/post-picture' component={PostPicture} />
        <PrivateRoute path='/battles/:id/vote' component={BattleVote} />
      </Switch>
    </div>
  )
}

export default App
