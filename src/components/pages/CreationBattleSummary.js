import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  const { battleCreation } = state
  return battleCreation
}

class CreationBattleSummary extends Component {
  render () {
    return (
      <div>
        <p>Hello</p>
        {this.props}
      </div>
    )
  }
}

export default connect(mapStateToProps)(CreationBattleSummary)
