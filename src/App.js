import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BattleCreationRules from './components/pages/BattleCreationRules'
import BattleCreationTheme from './components/pages/BattleCreationTheme'
import LandingPage from './components/pages/LandingPage.js'
import LoginRegistrationFormPage from './components/pages/LoginRegistrationFormPage.js'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/battlecreationrules' component={BattleCreationRules} />
        <Route path='/battlecreationtheme' component={BattleCreationTheme} />
        <Route path='/LoginRegistration' component={LoginRegistrationFormPage} />
      </Switch>
    </div>
  )
}

export default App
