import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './BattleCreationPage.css'

const themes = [
  {
    theme_id: 26,
    theme_name: 'Petit bonheur'
  },
  {
    theme_id: 33,
    theme_name: 'Lecture'
  },
  {
    theme_id: 147,
    theme_name: 'Tricolore'
  },
  {
    theme_id: 133,
    theme_name: 'Chiffres et nombres'
  },
  {
    theme_id: 97,
    theme_name: 'De l’autre côté'
  },
  {
    theme_id: 110,
    theme_name: 'Froid'
  },
  {
    theme_id: 83,
    theme_name: 'Petit trésor'
  },
  {
    theme_id: 56,
    theme_name: 'Balle & ballon'
  },
  {
    theme_id: 20,
    theme_name: 'Miroir'
  },
  {
    theme_id: 143,
    theme_name: 'Arbre'
  }
]

class BattleCreationTheme extends Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshed: false,
      selectedTheme: 0
    }
    this.handleRefresh = this.handleRefresh.bind(this)
    this.handleThemeChange = this.handleThemeChange.bind(this)
  }

  handleRefresh () {
    this.setState({ refreshed: !this.state.refreshed })
  }

  handleThemeChange (event) {
    this.setState({
      selectedTheme: event.target.id
    })
  }

  render () {
    const { refreshed, selectedTheme } = this.state
    return (
      <div className='battleCreation-page'>
        <div className='battleCreation-banner'>Créer une battle</div>
        <div className='cardBattle'>
          <h1>1. Choisis un thème</h1>
          <div className='battleCreation-themeContainer'> {refreshed ? themes.map((theme, i) => <><input type='radio' name='themeButton' value={theme.theme_name} checked={selectedTheme === theme.theme_id} onChange={this.handleThemeChange} id={theme.theme_id} key={theme.theme_id} /><label htmlFor={theme.theme_id} className='themeButton battle-btn' key={i}>{theme.theme_name}</label></>) : themes.slice(0, 5).map((theme, i) => <><input type='radio' name='themeButton' value={theme.theme_name} checked={selectedTheme === theme.theme_id} onChange={this.handleThemeChange} id={theme.theme_id} key={theme.theme_id} /><label htmlFor={theme.theme_id} className='themeButton battle-btn' key={i}>{theme.theme_name}</label></>)}</div>
          <button className={refreshed ? 'refreshed' : 'refreshButton'} onClick={this.handleRefresh} type='button'>Plus de thèmes</button>
          <div className='battleCreation-btnContainer'>
            <button className='battleCreation-cancelButton battle-btn' type='button'>Annuler</button> {/* Ajouter lien vers userpage */}
            <NavLink to='/battlecreationrules'><button className='battleCreation-validateButton battle-btn' type='button'>Suivant</button></NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default BattleCreationTheme
