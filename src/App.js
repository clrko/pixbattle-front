import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BattleCreationDeadline from './components/pages/BattleCreationDeadline'
import BattleCreationRule from './components/pages/BattleCreationRule'
import BattleCreationTheme from './components/pages/BattleCreationTheme'
import LandingPage from './components/pages/LandingPage.js'
import LoginRegistrationFormPage from './components/pages/LoginRegistrationFormPage.js'
import NewGroupBattlePage from './components/pages/NewGroupBattlePage'
import GroupNew from './components/pages/GroupNew'
import Profile from './components/pages/Profile'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/profil' component={Profile} />
        <Route path='/battlecreationdeadline' component={BattleCreationDeadline} />
        <Route path='/battlecreationrule' component={BattleCreationRule} />
        <Route path='/newbattle/theme' component={BattleCreationTheme} />
        <Route path='/newgroup/:id' component={GroupNew} />
        <Route path='/LoginRegistration' component={LoginRegistrationFormPage} />
        <Route path='/newgroup' component={NewGroupBattlePage} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </div>
  )
}

export default App
