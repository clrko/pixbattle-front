import React from 'react'
import './TabSelector.css'

function TabSelector ({ activeId, onHandleChange }) {
  return (
    <div className='TabSelector'>
      <button
        id='registration'
        onClick={onHandleChange}
        className={activeId === 'registration' ? 'active' : ''}
      >
        S'inscrire
      </button>

      <button
        id='login'
        onClick={onHandleChange}
        className={activeId === 'login' ? 'active' : ''}
      >
        Se connecter
      </button>
    </div>
  )
}

export default TabSelector
