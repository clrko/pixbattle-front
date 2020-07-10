import React, { Component } from 'react'
import './MyBattles.css'

class MyBattlesCardList extends Component {
  render () {
    return (
      <div className='MyBattles-cardList'>
        <div className='MyBattles-card'>
          <h2 className='MyBattles-card-title'>Thèmes: Reflets</h2>
          <p>Temps écoulé</p>
          <p>Progress bar</p>
          <button className='MyBattles-card-button'>Vote</button>
          <p className='MyBattles-card-group'>Team Pix battle</p>
        </div>
      </div>
    )
  }
}

export default MyBattlesCardList
