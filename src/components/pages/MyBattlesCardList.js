import React, { Component } from 'react'
import './MyBattles.css'

class MyBattlesCardList extends Component {
  render () {
    return (
      <div className='MyBattles-cardList'>
        <div className='MyBattles-card'>
          <h2 className='MyBattles-card-title'>Thème: Reflets</h2>
          <i className='fas fa-crown MyBattles-crown' />
          <p className='MyBattles-card-time'>Temps écoulé !</p>
          <button className='MyBattles-card-button'>Vote</button>
          <p className='MyBattles-card-group'>Team Pix battle</p>
        </div>
      </div>
    )
  }
}

export default MyBattlesCardList
