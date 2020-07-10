import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage.js'
import LoginRegistrationFormPage from './components/pages/LoginRegistrationFormPage.js'
import BattleCreationTheme from './components/pages/BattleCreationTheme'
import Lightbox from './components/pages/Lightbox.js'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/LoginRegistration' component={LoginRegistrationFormPage} />
        <Route path='/battlecreationtheme' component={BattleCreationTheme} />
      </Switch>
      <Lightbox />
    </div>
  )
}

export default App
