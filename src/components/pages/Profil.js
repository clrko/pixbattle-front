import React, { Component } from 'react'
import axios from 'axios'

class Profil extends Component {
  state = {
    userId: 1
  }

  handleCreateGroupe = e => {
    e.preventDefault()
    const { userId } = this.state
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}group-creation`, userId)
      .then(res => {
        console.log(res, userId)
      })
  }

  render () {
    return (
      <div>
        hello
        <button type='submit' onClick={this.handleCreateGroupe} />
      </div>
    )
  }
}

export default Profil
