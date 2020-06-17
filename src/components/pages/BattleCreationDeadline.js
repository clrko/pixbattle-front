import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './BattleCreation.css'

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

class BattleCreationRule extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedRules: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    if (this.state.selectedRules.includes(event.target.id)) {
      const listRulesTemp = [...this.state.selectedRules]
      const index = listRulesTemp.findIndex(item => item === event.target.id)
      listRulesTemp.splice(index, 1)
      this.setState({
        selectedRules: [...listRulesTemp]
      })
    } else {
      this.setState({
        selectedRules: [...this.state.selectedRules, event.target.id]
      })
    }
  }

  render () {
    const { selectedRules } = this.state
    return (
      <div className='battleCreation-page'>
        <div className='battleCreation-banner'>Créer une battle</div>
        <div className='cardBattle'>
          <h1>2. Personnalise la battle</h1>{/* classname ne marche pas  */}
          <div className='battleCreation-ruleContainer'> {rules.map((rule, i) => <button type='button' className={selectedRules.includes(toString(rule.rule_id)) ? 'battle-optionButton-selected battle-btn' : 'battle-optionButton battle-btn'} onClick={this.handleClick} id={rule.rule_id} key={i}>{rule.rule_name}</button>)}</div>
          <div className='battleCreation-btnContainer'>
            <NavLink to='/battlecreationrule'><button className='battleCreation-cancelButton battle-btn' type='button'>Retour</button></NavLink>
            <button className='battleCreation-validateButton battle-btn' type='button'>Suivant</button> {/* Ajotuer lien vers next page de poste ta photo */}
          </div>
        </div>
      </div>
    )
  }
}

export default BattleCreationRule
