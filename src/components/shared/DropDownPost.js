import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './DropDown.css'

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

class DropDownPost extends React.Component {
  handleChange = e => {
    this.props.history.push(e.target.value)
  }

  render () {
    const { match } = this.props
    const selectedOption = match.url
    return (
      <div className='background-DropDown'>
        <select value={selectedOption} className='DropDown' onChange={this.handleChange}>
          <option value={`/groups/${match.params.groupId}/battles/${match.params.battleId}/post-picture`}>Poster</option>
          <option value={`/groups/${match.params.groupId}/battles/${match.params.battleId}/post-picture/participants`}>Participants</option>
        </select>
      </div>
    )
  }
}

export default connect(mapStateToProps)(withRouter(DropDownPost))
