import React from 'react'
import { connect } from 'react-redux'
// import axios from 'axios'

const mapStateToProps = state => {
  const { battleCreation } = state
  return { battleCreation }
}

const CreationBattleSummary = ({ battleCreation }) => {
  console.log('battle creation', battleCreation)
  /* const handleClick = e => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/battle-creation`,
      {
        headers: {
          'x-access-token': localStorage.getItem('token')
        },
        body: {
          'groupId': '',
          'themeId': '',
          'rulesId': '',
          'deadline': ''
        }
      }
    ).then(res => {
      if (res.status === 200) {
        const { dispatch } = this.props
        dispatch({ type: REMOVE_ALL, selectedTheme })
      }
    })
  } */

  return (
    <div>
      <h1>Vous êtes sur le point de créer la battle suivante</h1>
      <h2>Thème de la battle</h2>
      <p>{battleCreation[1].themeName}</p>
      <h2>Personnalisation de la battle</h2>
      {battleCreation[2].map(rule => <p key={rule.rule_id}>{rule.rule_name}</p>)}
      <h2>Date limite choisie</h2>
      <p>{battleCreation[3]}</p>
      <button>Confirmer</button>
    </div>
  )
}

/* Il faut mettre dans des state / variable la deadline, ou dnas les paramètres de axios la deadline, le group_id, theme/id, tables appelé allRules */

export default connect(mapStateToProps)(CreationBattleSummary)
