import React from 'react'
import './TabSelector.css'

function TabSelector ({ activeId, handleChange }) {
  return (
    <div className='TabSelector'>
      <button id='registration' onClick={handleChange} className={activeId === 'registration' ? 'active' : ''}>
        S'inscrire
      </button>

      <button id='login' onClick={handleChange} className={activeId === 'login' ? 'active' : ''}>
        Se connecter
      </button>
    </div>
  )
}

export default TabSelector
