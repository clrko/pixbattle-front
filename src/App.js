import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage.js'
import LoginRegistrationFormPage from './components/pages/LoginRegistrationFormPage.js'
import BattleCreationTheme from './components/pages/BattleCreationTheme'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/LoginRegistration' component={LoginRegistrationFormPage} />
        <Route path='/battlecreation-theme' component={BattleCreationTheme} />
      </Switch>
    </div>
  )
}

export default App
