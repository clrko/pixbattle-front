import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage.js'
import Profile from './components/pages/Profile'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/profil' component={Profile} />
      </Switch>
    </div>
  )
}

export default App
