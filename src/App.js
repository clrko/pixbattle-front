import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BattleCreationDeadline from './components/pages/BattleCreationDeadline'
import BattleCreationRule from './components/pages/BattleCreationRule'
import BattleCreationTheme from './components/pages/BattleCreationTheme'
import LandingPage from './components/pages/LandingPage.js'
import LoginRegistrationFormPage from './components/pages/LoginRegistrationFormPage.js'
import MyProfile from './components/pages/MyProfile'
import MyPictures from './components/pages/MyPictures'
import MyRanking from './components/pages/MyRanking'
import NewGroupBattlePage from './components/pages/NewGroupBattlePage'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/LoginRegistration' component={LoginRegistrationFormPage} />
        <Route path='/MyProfile' component={MyProfile} />
        <Route path='/MyRanking' component={MyRanking} />
        <Route path='/MyPictures' component={MyPictures} />
        <Route path='/battlecreationdeadline' component={BattleCreationDeadline} />
        <Route path='/battlecreationrule' component={BattleCreationRule} />
        <Route path='/battlecreationtheme' component={BattleCreationTheme} />
        <Route path='/LoginRegistration' component={LoginRegistrationFormPage} />
        <Route path='/newgroup/:id' component={NewGroupBattlePage} />
      </Switch>
    </div>
  )
}

export default App
