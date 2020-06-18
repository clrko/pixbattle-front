import React, { Component } from 'react'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import TabSelector from './TabSelector'
import './LoginRegistrationFormPage.css'

const Error = () => (
  <p>Something went <strong>wrong</strong>!</p>
)

class LoginRegistrationFormPage extends Component {
  state = {
    activeId: ''
  }

  handleChangeTab = e => {
    const buttonId = e.target.id
    this.setState({ activeId: buttonId })
  }

  componentDidMount () {
    this.setState({ activeId: 'registration' })
  }

  getTabContent = () => {
    switch (this.state.activeId) {
      case 'registration':
        return <RegistrationForm />
      case 'login':
        return <LoginForm />
      default:
        return <Error />
    }
  }

  render () {
    return (
      <div className='LoginRegistrationFormPage-FullPage'>
        <TabSelector
          onHandleChange={this.handleChangeTab}
          activeId={this.state.activeId}
        />
        <div className='LoginRegistrationFormPage-background'>
          <div>{this.getTabContent()}</div>
        </div>
      </div>
    )
  }
}

export default LoginRegistrationFormPage
