import React, { Component } from 'react'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import TabSelector from './TabSelector'

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
        return <RegistrationForm onClose={this.props.onClose} />
      case 'login':
        return <LoginForm onClose={this.props.onClose} />
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
          {this.getTabContent()}
        </div>
      </div>
    )
  }
}

export default LoginRegistrationFormPage
