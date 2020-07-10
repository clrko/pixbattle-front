import React, { Component } from 'react'
import MyBattlesCard from './MyBattlesCard'
import './MyBattles.css'

const battleInfos = [
  {
    battleTheme: 'Thème : Reflets',
    battleTimeMessage: 'Temps écoulé !',
    battleStatus: 'Vote',
    battleGroup: 'Team Pix battle',
    userAdmin: true
  },
  {
    battleTheme: 'Thème : Flower Power',
    battleTimeMessage: 'Encore 6h 25min 35sec',
    battleStatus: 'Poste ta photo',
    battleGroup: 'Wilders',
    userAdmin: false
  },
  {
    battleTheme: 'Thème : Empilement',
    battleTimeMessage: 'Temps écoulé !',
    battleStatus: 'Resultats',
    battleGroup: 'Team Pix battle',
    userAdmin: false
  },
  {
    battleTheme: 'Thème : Rayures',
    battleTimeMessage: 'Temps écoulé !',
    battleStatus: 'Post', /* veiller à envoyer le battle ID */
    battleGroup: 'Team Hello',
    userAdmin: true
  }
]

class MyBattlesCardList extends Component {
  render () {
    return (
      <div className='MyBattles-cardList'>
        {battleInfos.map((battle, i) => <MyBattlesCard battleTheme={battle.battleTheme} battleTimeMessage={battle.battleTimeMessage} battleStatus={battle.battleStatus} battleGroup={battle.battleGroup} key={i} userAdmin={battle.userAdmin} />)}
      </div>
    )
  }
}

export default MyBattlesCardList
