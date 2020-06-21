import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage.js'
import GroupNew from './components/pages/GroupNew'
import Profile from './components/pages/Profile'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/newgroup/:id' component={GroupNew} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </div>
  )
}

export default App
