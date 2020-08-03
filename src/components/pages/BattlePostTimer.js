import React from 'react'
import Loader from 'react-loader-spinner'
import Timer from 'react-compound-timer'
import moment from 'moment'
import './BattlePostTimer.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const BattlePostTimer = ({ deadline, onDeadlineReached }) => {
  const startDate = moment()
  const endDate = moment(deadline)
  const difference = endDate.diff(startDate)

  if (!deadline) {
    return (
      <div style={{ width: 'auto', margin: 'auto', textAlign: 'center' }}>
        <Loader type='ThreeDots' color='#00BFFF' height={80} width={80} />
      </div>
    )
  }

  return (
    <div>
      <Timer
        initialTime={difference}
        direction='backward'
        checkpoints={[
          {
            time: 0,
            callback: onDeadlineReached
          }
        ]}
      >
        <div className='battle-post-timer-container'>
          <div className='battle-post-timer-count'>
            <Timer.Days />
            <hr />
            <p>jours</p>
          </div>
          <span>:</span>
          <div className='battle-post-timer-count'>
            <Timer.Hours />
            <hr />
            <p>heures</p>
          </div>
          <span>:</span>
          <div className='battle-post-timer-count'>
            <Timer.Minutes />
            <hr />
            <p>min</p>
          </div>
          <span>:</span>
          <div className='battle-post-timer-count'>
            <Timer.Seconds />
            <hr />
            <p>sec</p>
          </div>
        </div>
      </Timer>
    </div>
  )
}

export default BattlePostTimer
