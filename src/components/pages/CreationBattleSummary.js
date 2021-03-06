import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { REMOVE_ALL, REMOVE_DEADLINE } from '../../store/action-types'

const mapStateToProps = state => {
  const { battleCreation } = state
  return { battleCreation }
}

const CreationBattleSummary = ({ battleCreation, dispatch, history, onClose }) => {
  const handleClick = async e => {
    const { groupName, emails, groupId: existingGroupId, theme, rules, deadline } = battleCreation
    let groupId
    if (!existingGroupId) {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/group-creation`,
        {
          emails,
          groupName
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      groupId = res.data.groupId
    } else {
      groupId = existingGroupId
    }
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/battle/battle-creation`,
      {
        groupId: groupId,
        themeId: parseInt(theme.themeId),
        rulesId: rules.map(rule => rule.rule_id),
        deadline: deadline
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    ).then(res => {
      if (res.status === 201) {
        const { battleId } = res.data
        history.push(`/groups/${groupId}/battles/${battleId}/post-picture`, {
          battleId: battleId,
          groupId: groupId
        })
        dispatch({ type: REMOVE_ALL })
      }
    })
    return onClose(e)
  }

  const handleReturn = e => {
    dispatch({ type: REMOVE_DEADLINE })
    return onClose(e)
  }

  return (
    <div className='cardBattle-summary'>
      <div className='children-cardBattle-summary'>
        <h1 className='cardBattle-color h1-recapitulatif'>Récapitulatif</h1>
        <h2 className='cardBattle-color'>Thème choisi</h2>
        <p className='battle-optionButton battle-btn battle-creation-summary'>{battleCreation.theme.themeName}</p>
        <hr className='battle-summary-hr' />
        <h2 className='cardBattle-color'>Contraintes à respecter</h2>
        {battleCreation.rules.map(rule => <p key={rule.rule_id} className='battle-optionButton battle-btn battle-creation-summary'>{rule.rule_name}</p>)}
        <hr className='battle-summary-hr' />
        <h2 className='cardBattle-color'>Date limite choisie</h2>
        <p className='p-date-CreationbattleSummary'>{battleCreation.deadline}</p>
        <div className='div-button-CreationBattleSummary'>
          <button className='battleCreation-cancelButton battle-btn' onClick={handleReturn}>Retour</button>
          <button className='battleCreation-validateButton battle-btn' onClick={handleClick}>Confirmer</button>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(withRouter(CreationBattleSummary))
