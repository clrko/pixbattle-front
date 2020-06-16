import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage.js'
// import BattleCreationTheme from './components/pages/BattleCreationTheme'
// import LoginRegistrationFormPage from './components/pages/LoginRegistrationFormPage'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>
      {/* <LoginRegistrationFormPage />
      <BattleCreationTheme /> */}
    </div>
  )
}

export default App
