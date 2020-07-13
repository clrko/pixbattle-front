import React, { Component } from 'react'
import moment from 'moment'
import MyBattlesCard from './MyBattlesCard'
import './MyBattles.css'

const battleInfos = [
  {
    battleTheme: 'Thème : Reflets',
    battleTimeMessage: 'Temps écoulé !',
    completed: 60,
    battleStatus: 'Vote',
    battleGroup: 'Team Pix battle',
    userAdmin: true
  },
  {
    battleTheme: 'Thème : Flower Power',
    battleTimeMessage: 'Encore 6h 25min 35sec',
    completed: 50,
    battleStatus: 'Poste ta photo',
    battleGroup: 'Wilders',
    userAdmin: false
  },
  {
    battleTheme: 'Thème : Empilement',
    battleTimeMessage: 'Temps écoulé !',
    completed: 20,
    battleStatus: 'Resultats',
    battleGroup: 'Team Pix battle',
    userAdmin: false
  },
  {
    battleTheme: 'Thème : Rayures',
    battleTimeMessage: 'Temps écoulé !',
    completed: 90,
    battleStatus: 'Post', /* veiller à envoyer le battle ID */
    battleGroup: 'Team Hello',
    userAdmin: true
  }
]

class MyBattlesCardList extends Component {
  componentDidMount () {
    const deadline = moment('2020-07-15 12:30:00')
    console.log('deadline est ', deadline)
    const today = moment().local()
    console.log('today est', today)
    const createDate = moment('2020-07-10 10:00:00')
    console.log('create date est', createDate)
    const differenceToToday = today.diff(createDate, 'seconds')
    console.log('diffToday', differenceToToday)
    const differenceToDeadline = deadline.diff(createDate, 'seconds')
    console.log('diff deadilne', differenceToDeadline)
    const completedTemp = (differenceToToday / differenceToDeadline) * 100
    console.log(' diff est  en pourcentage', completedTemp)
    const durationTodayToDealine = moment.duration(deadline.diff(today))
    console.log('duration dauj _a la deadline ', durationTodayToDealine)
    console.log(`Encore ${durationTodayToDealine._data.days} jrs ${durationTodayToDealine._data.hours} heures ${durationTodayToDealine._data.minutes} minutes`)
    return completedTemp
  }

  render () {
    console.log('compelted est', this.completedTemp)
    return (
      <div className='MyBattles-cardList'>
        {battleInfos.map((battle, i) => <MyBattlesCard battleTheme={battle.battleTheme} battleTimeMessage={battle.battleTimeMessage} battleStatus={battle.battleStatus} battleGroup={battle.battleGroup} key={i} userAdmin={battle.userAdmin} completed={battle.completed} />)}
      </div>
    )
  }
}

export default MyBattlesCardList
