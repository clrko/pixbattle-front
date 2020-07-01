import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { ADD_THEME } from '../../store/action-types'
import './CreationBattle.css'

class CreationBattleTheme extends Component {
  state = {
    themes: [],
    refreshed: false,
    selectedTheme: 0
  }

  handleRefresh = () => {
    this.setState({ refreshed: !this.state.refreshed })
  }

  handleThemeChange = e => {
    this.setState({
      selectedTheme: e.target.id
    })
  }

  handleChangeSteps = e => {
    const selectedThemeId = { themeId: this.state.selectedTheme }
    const { dispatch } = this.props
    dispatch({ type: ADD_THEME, selectedThemeId })
    return this.props.changeStep(e)
  }

  componentDidMount () {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/battle-creation/themes`,
      {
        headers: {
          'x-access-token': localStorage.getItem('token')
        }
      })
      .then(res => {
        this.setState({ themes: res.data })
      })
  }

  render () {
    const { themes, refreshed, selectedTheme } = this.state
    return (
      <div className='battleCreation-page'>
        <div className='cardBattle'>
          <h1 className='cardBattle-color'>1. Choisis un thème</h1>
          <div className='battleCreation-themeContainer'>
            {refreshed ? themes.map((theme, i) => <><input type='radio' name='themeButton' value={theme.theme_name} checked={selectedTheme === theme.theme_id} onChange={this.handleThemeChange} id={theme.theme_id} key={theme.theme_id} /><label htmlFor={theme.theme_id} className='battle-optionButton battle-btn' key={i}>{theme.theme_name}</label></>) : themes.slice(0, 5).map((theme, i) => <><input type='radio' name='themeButton' value={theme.theme_name} checked={selectedTheme === theme.theme_id} onChange={this.handleThemeChange} id={theme.theme_id} key={theme.theme_id} /><label htmlFor={theme.theme_id} className='battle-optionButton battle-btn' key={i}>{theme.theme_name}</label></>)}
          </div>
          <button
            className={refreshed ? 'refreshed' : 'refreshButton'}
            onClick={this.handleRefresh}
            type='button'
          >
            Plus de thèmes
          </button>
          <div className='battleCreation-btnContainer'>
            <button
              className='battleCreation-cancelButton battle-btn'
              type='button'
            >
              Annuler
            </button> {/* Ajouter lien vers le choix du nom de groupe */}
            <button
              className='battleCreation-validateButton battle-btn'
              onClick={this.handleChangeSteps}
              type='button'
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(CreationBattleTheme)
