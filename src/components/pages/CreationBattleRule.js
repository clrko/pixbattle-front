import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { ADD_RULES } from '../../store/action-types'
import './CreationBattle.css'

const rules = [
  {
    rule_id: 1,
    rule_name: 'Capture d\'écran'
  },
  {
    rule_id: 2,
    rule_name: 'Retouches'
  },
  {
    rule_id: 3,
    rule_name: 'Appareil photo'
  },
  {
    rule_id: 4,
    rule_name: 'Faire poser une personne'
  },
  {
    rule_id: 5,
    rule_name: 'Smartphone'
  },
  {
    rule_id: 6,
    rule_name: 'Ajout de texte'
  },
  {
    rule_id: 7,
    rule_name: 'Ajout d\'illustration'
  }
]

class CreationBattleRule extends Component {
  state = {
    selectedRules: []
  }

  handleOptionClick = e => {
    if (this.state.selectedRules.some(rule => rule.rule_id === e.target.id)) {
      const listRulesTemp = [...this.state.selectedRules]
      const index = listRulesTemp.findIndex(item => item.rule_id === e.target.id)
      listRulesTemp.splice(index, 1)
      this.setState({
        selectedRules: [...listRulesTemp]
      })
    } else {
      const selectedRuleIndex = rules.findIndex(item => item.rule_id === e.target.id)
      this.setState({
        selectedRules: [...this.state.selectedRules, rules[selectedRuleIndex]]
      })
    }
  }

  handleChangeSteps = e => {
    const rules = { rules: [...this.state.selectedRules] }
    const { dispatch } = this.props
    dispatch({ type: ADD_RULES, rules })
    return this.props.changeStep(e)
  }

  render () {
    const { selectedRules } = this.state
    return (
      <div className='battleCreation-page'>
        <div className='cardBattle'>
          <h1 className='cardBattle-color'>2. Personnalise la battle</h1>
          <div className='battleCreation-ruleContainer'>
            {rules.map((rule, i) => <button type='button' className={selectedRules.some(selectedRule => selectedRule.rule_id === rule.rule_id) ? 'battle-optionButton-selected battle-btn' : 'battle-optionButton battle-btn'} onClick={this.handleOptionClick} id={rule.rule_id} key={i}>{rule.rule_name}</button>)}
          </div>
          <div className='battleCreation-btnContainer'>
            <NavLink to='/battle-creation/theme'>
              <button
                className='battleCreation-cancelButton battle-btn'
                type='button'
              >
                Retour
              </button>
            </NavLink> {/* Ajouter lien vers theme page + redux */}
            <button
              className='battleCreation-validateButton battle-btn'
              type='button'
              onClick={this.handleChangeSteps}
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(CreationBattleRule)
