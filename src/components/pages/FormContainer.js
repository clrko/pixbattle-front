import React, { Component } from 'react'
import FormLogin from './FormLogin'
import FormRegistration from './FormRegistration'
import FormSelector from './FormSelector'

const Error = () => (
  <p>Something went <strong>wrong</strong>!</p>
)

class FormContainer extends Component {
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
        return <FormRegistration onClose={this.props.onClose} invitationCode={this.props.invitationCode} />
      case 'login':
        return <FormLogin onClose={this.props.onClose} invitationCode={this.props.invitationCode} />
      default:
        return <Error />
    }
  }

  render () {
    return (
      <div className='LoginRegistrationFormPage-FullPage'>
        <FormSelector
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

export default FormContainer
