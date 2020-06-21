import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BattleCreationTheme from './components/pages/BattleCreationTheme'
import LandingPage from './components/pages/LandingPage.js'
import GroupNew from './components/pages/GroupNew'
import Profile from './components/pages/Profile'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/newbattle/theme' component={BattleCreationTheme} />
        <Route exact path='/' component={LandingPage} />
        <Route path='/newgroup/:id' component={GroupNew} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </div>
  )
}

export default App
