import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreationBattleDeadline from './components/pages/CreationBattleDeadline'
import CreationBattleRule from './components/pages/CreationBattleRule'
import CreationBattleTheme from './components/pages/CreationBattleTheme'
import CreationBattleSummary from './components/pages/CreationBattleSummary'
import CreationSteps from './components/pages/CreationSteps'
import LandingPage from './components/pages/LandingPage'
import FormContainer from './components/pages/FormContainer'
import MyBattles from './components/pages/MyBattles'
import MyGroups from './components/pages/MyGroups'
import MyProfile from './components/pages/MyProfile'
import MyPictures from './components/pages/MyPictures'
import MyRanking from './components/pages/MyRanking'
import Podium from './components/pages/Podium'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/battle-creation/deadline' component={CreationBattleDeadline} />
        <Route path='/battle-creation/rule' component={CreationBattleRule} />
        <Route path='/battle-creation/theme' component={CreationBattleTheme} />
        <Route path='/battle-creation/summary' component={CreationBattleSummary} />
        <Route path='/LoginRegistration' component={FormContainer} />
        <Route path='/MyBattles' component={MyBattles} />
        <Route path='/MyGroups' component={MyGroups} />
        <Route path='/MyProfile' component={MyProfile} />
        <Route path='/MyRanking' component={MyRanking} />
        <Route path='/MyPictures' component={MyPictures} />
        <Route path='/Podium' component={Podium} />
        <Route path='/newgroup/:id' component={CreationSteps} />
      </Switch>
    </div>
  )
}

export default App
