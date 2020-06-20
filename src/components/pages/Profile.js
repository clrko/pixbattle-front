import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import axios from 'axios'

class Profile extends Component {
  // state = {
  //   userId: 1
  // }

  // handleCreateGroupe = e => {
  //   e.preventDefault()
  //   const { userId } = this.state
  //   axios
  //     .post(`${process.env.REACT_APP_SERVER_URL}group-creation`, userId)
  //     .then(res => {
  //       console.log(res, userId)
  //     })
  // }

  render () {
    return (
      <div>
        hello
        {/* <button type='submit' onClick={this.handleCreateGroupe} /> */}
        <NavLink to='/newgroup'>
          <button>Créer un groupe</button>
        </NavLink>
      </div>
    )
  }
}

export default Profile
