import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { REMOVE_ALL } from '../../store/action-types'

const mapStateToProps = state => {
  const { battleCreation } = state
  return { battleCreation }
}

const CreationBattleSummary = ({ battleCreation, dispatch, history, onClose }) => {
  const handleClick = e => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/battle/battle-creation`,
      {
        groupId: parseInt(battleCreation.groupId),
        themeId: parseInt(battleCreation.theme.themeId),
        rulesId: battleCreation.rules.map(rule => rule.rule_id),
        deadline: battleCreation.deadline
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    ).then(res => {
      if (res.status === 201) {
        const groupId = parseInt(battleCreation.groupId)
        history.push(`/groups/${groupId}/battles/${res.data.battleId}/post-picture`, {
          battleId: res.data.battleId,
          groupId: parseInt(battleCreation.groupId)
        })
        dispatch({ type: REMOVE_ALL })
      }
    })
    return onClose(e)
  }

  return (
    <div className='cardBattle-summary'>
      <div className='children-cardBattle-summary'>
        <h1 className='cardBattle-color h1-recapitulatif'>Récapitulatif</h1>
        <h2 className='cardBattle-color'>Thème choisi</h2>
        <p className='battle-optionButton battle-btn'>{battleCreation.theme.themeName}</p>
        <h2 className='cardBattle-color'>Contraintes à respecter</h2>
        {battleCreation.rules.map(rule => <p key={rule.rule_id} className='battle-optionButton battle-btn'>{rule.rule_name}</p>)}
        <h2 className='cardBattle-color'>Date limite choisie</h2>
        <p className='p-date-CreationbattleSummary'>{battleCreation.deadline}</p>
        <div className='div-button-CreationBattleSummary'>
          <button className='battleCreation-validateButton battle-btn' onClick={handleClick}>Confirmer</button>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(withRouter(CreationBattleSummary))
