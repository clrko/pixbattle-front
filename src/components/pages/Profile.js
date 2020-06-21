import React, { Component } from 'react'
import axios from 'axios'

class Profile extends Component {
  state = {
    userId: 1
  }

  handleCreateGroupe = e => {
    e.preventDefault()
    const { history } = this.props
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/group-creation`,
        {
          headers: {
            'x-access-token': localStorage.getItem('token')
          }
        },
        console.log('pouet', localStorage.getItem('token'))
      )
      .then(res => {
        const groupId = res.data.groupId
        history.push({
          pathname: `/newgroup/${groupId}`
        })
        console.log(groupId)
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

export default Profile
