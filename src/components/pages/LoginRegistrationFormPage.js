import React from 'react'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import TabSelector from './TabSelector'

import './LoginRegistrationFormPage.css'

const Error = () => (
  <p>Something went <strong>wrong</strong>!</p>
)

class LoginRegistrationFormPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeId: ''
    }
    this.handleChangeTab = this.handleChangeTab.bind(this)
  }

  handleChangeTab (event) {
    const buttonId = event.target.id
    this.setState({ activeId: buttonId })
  }

  componentDidMount () {
    this.setState({ activeId: 'registration' })
  }

  getTabContent () {
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
      <div className='LoginRegistrationFormPage-background'>
        <TabSelector
          onHandleChange={this.handleChangeTab}
          activeId={this.state.activeId}
        />
        <div>{this.getTabContent()}</div>
      </div>
    )
  }
}

export default LoginRegistrationFormPage
