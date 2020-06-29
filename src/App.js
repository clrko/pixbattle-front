import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreationBattleDeadline from './components/pages/CreationBattleDeadline'
import CreationBattleRule from './components/pages/CreationBattleRule'
import CreationBattleTheme from './components/pages/CreationBattleTheme'
import Gallery from './components/shared/Gallery'
import LandingPage from './components/pages/LandingPage'
import FormContainer from './components/pages/FormContainer'
import MyProfile from './components/pages/MyProfile'
import MyPictures from './components/pages/MyPictures'
import MyRanking from './components/pages/MyRanking'
import CreationSteps from './components/pages/CreationSteps'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/battle-creation/deadline' component={CreationBattleDeadline} />
        <Route path='/battle-creation/rule' component={CreationBattleRule} />
        <Route path='/battle-creation/theme' component={CreationBattleTheme} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/LoginRegistration' component={FormContainer} />
        <Route path='/MyProfile' component={MyProfile} />
        <Route path='/MyRanking' component={MyRanking} />
        <Route path='/MyPictures' component={MyPictures} />
        <Route path='/newgroup/:id' component={CreationSteps} />
      </Switch>
    </div>
  )
}

export default App
