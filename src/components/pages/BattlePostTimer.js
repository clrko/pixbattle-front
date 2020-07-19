import React, { useEffect } from 'react'
import Timer from 'react-compound-timer'
import './BattlePostTimer.css'

const BattlePostTimer = ({ deadline, history, battleId, groupId }) => {
  const startDate = new Date()
  const endDate = new Date(deadline)
  const utc = startDate.getTime() + (startDate.getTimezoneOffset() * 60000)
  const difference = (endDate.getTime() - utc)

  useEffect(() => {
    if (difference === 0) {
      history.push(`/groups/${groupId}/battles/${battleId}/vote`)
    }
  }, [])

  if (!deadline) {
    return <p>loading...</p>
  }

  return (
    <div>
      <Timer
        initialTime={difference}
        direction='backward'
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
