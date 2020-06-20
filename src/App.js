import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage.js'
import Profil from './components/pages/Profil'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/profil' component={Profil} />
      </Switch>
    </div>
  )
}

export default App
