import React, { useState } from 'react'
import './MySettingsGroups.css'

export const groupSample = {
  groupId: 1,
  groupName: 'npmdugroupe'
}

const MySettingsGroups = (groupSample) => {
  const [groupName, setGroupName] = useState('')
  const [isGroupName, setIsGroupName] = useState(false)

  const handleChange = e => {
    setGroupName(e.target.value)
  }

  const handleChosenName = e => {
    e.preventDefault()
    if (groupName.length > 0) {
      /* ajouter le axios et mettre a true quand on a la reponse */
      setIsGroupName(true)
    }
  }
  return (
    <div>
      <div>ajouter un dropdown</div>
      <div className='background-PageProfileSettings'>
        <form className='setting-group-container'>
          <p className='modified-group-text'>Modifier le nom du groupe</p>
          <div className='container-modified-group-name'>
            <input
              type='text'
              className='modified-group-input'
              name='groupName'
              onChange={handleChange}
              placeholder='Nom du groupe' /* mettre le group actuel */
              value={groupName}
              required
              minLength='5'
              maxLength='25'
              disabled={isGroupName}
            />
            {
              !isGroupName &&
                <button className='button-modified-group-name' onClick={handleChosenName}>
                Valider
                </button>
            }
          </div>
          <p className={groupName.length < 5 ? 'infoSettings' : 'infoSettings green'}>Entre 5 et 25 caractères</p>
        </form>
      </div>
    </div>
  )
}

export default MySettingsGroups
