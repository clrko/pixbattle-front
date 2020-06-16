import React, { Component } from 'react'
import ModalComponent from './ModalComponent'

class ModalContent extends Component {
  state = {
    content: ''
  }

  handleModalContent = e => {
    e.preventDefault()
    this.setState({ content: e.target.id })
  }

  render () {
    return (
      <div>
        <button id='loginRegister' onClick={this.handleModalContent}>LoginRegister</button>
        <button id='newGroup' onClick={this.handleModalContent}>New Group </button>
        <button id='newBattleTheme' onClick={this.handleModalContent}>New Battle Theme</button>
        <button id='newBattleOptions' onClick={this.handleModalContent}>New Battle Option</button>
        <button id='newBattleDeadline' onClick={this.handleModalContent}>New Battle Deadline</button>
        <ModalComponent typeOfContent={this.state.content} />
      </div>
    )
  }
}

export default ModalContent
