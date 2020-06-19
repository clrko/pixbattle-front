import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage.js'
import LoginRegistrationFormPage from './components/pages/LoginRegistrationFormPage.js'
import MyProfile from './components/pages/MyProfile'
import MyPictures from './components/pages/MyPictures'
import MyRanking from './components/pages/MyRanking'
// import DropDown from './components/pages/DropDown'
// import PageAll from './components/pages/PageAll'
// import BattleCreationTheme from './components/pages/BattleCreationTheme'
import BattleCreationTheme from './components/pages/BattleCreationTheme'

// const Menu = withRouter(DropDown)

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/LoginRegistration' component={LoginRegistrationFormPage} />
        <Route path='/MyProfile' component={MyProfile} />
        <Route path='/MyRanking' component={MyRanking} />
        <Route path='/MyPictures' component={MyPictures} />
        <Route path='/battlecreationtheme' component={BattleCreationTheme} />
      </Switch>
      {/* <BattleCreationTheme /> */}
      {/* <Menu /> */}
      {/* <MyProfile /> */}
    </div>
  )
}

export default App
