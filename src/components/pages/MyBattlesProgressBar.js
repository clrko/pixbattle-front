import React from 'react'
import './MyBattlesProgressBar.css'

const MyBattlesProgressBar = ({ completed }) => {
  return (
    <div className='containerStyles'>
      <div className='fillerStyles' style={{ width: `${completed}%`, transition: `${completed}% 1s ease-in-out` }} />
    </div>
  )
}

export default MyBattlesProgressBar
