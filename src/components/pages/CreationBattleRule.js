import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import { ADD_RULES, REMOVE_THEME } from '../../store/action-types'
import './CreationBattle.css'

class CreationBattleRule extends Component {
  state = {
    rules: [],
    selectedRules: []
  }

  handleOptionClick = e => {
    if (this.state.selectedRules.some(selectedRule => selectedRule.rule_id === parseInt(e.target.id))) {
      const listRulesTemp = [...this.state.selectedRules]
      const index = listRulesTemp.findIndex(item => item.rule_id === parseInt(e.target.id))
      listRulesTemp.splice(index, 1)
      this.setState({
        selectedRules: [...listRulesTemp]
      })
    } else {
      const selectedRuleIndex = this.state.rules.findIndex(item => item.rule_id === parseInt(e.target.id))
      this.setState({
        selectedRules: [...this.state.selectedRules, this.state.rules[selectedRuleIndex]]
      })
    }
  }

  handleChangeSteps = e => {
    const rules = [...this.state.selectedRules]
    const { dispatch, history } = this.props
    dispatch({ type: ADD_RULES, rules })
    if (this.props.changeStep) {
      return this.props.changeStep(e)
    }
    return history.push('/battle-creation/deadline')
  }

  handleReturn = e => {
    const { dispatch } = this.props
    dispatch({ type: REMOVE_THEME })
  }

  componentDidMount () {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/battle/battle-creation/rules`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(res => {
        this.setState({ rules: res.data })
      })
  }

  render () {
    const { rules } = this.state
    return (
      <div className='battleCreation-page'>
        <div className='cardBattle'>
          <h1 className='cardBattle-color'>Personnalise la battle</h1>
          <div className='battleCreation-ruleContainer'>
            {
              rules.map((rule, i) =>
                <button
                  type='button'
                  className='battle-optionButton battle-btn'
                  onClick={this.handleOptionClick}
                  id={rule.rule_id}
                  key={i}
                >
                  {rule.rule_name}
                </button>
              )
            }
          </div>
          <div className='battleCreation-btnContainer'>
            <NavLink to='/battle-creation/theme'>
              <button
                className='battleCreation-cancelButton battle-btn'
                type='button'
                onClick={this.handleReturn}
              >
                Retour
              </button>
            </NavLink>
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
