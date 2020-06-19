import React, { Component } from 'react'
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
  state = {
    refreshed: false
  }

  handleRefresh () {
    this.setState({ refreshed: !this.state.refreshed })
  }

  render () {
    const { refreshed } = this.state
    return (
      <div className='battleCreationPage'>
        <div className='createBattleBanner'>Créer une battle</div>
        <div className='cardBattle'>
          <h1>1. Choisis un thème</h1>
          <p>Prédéfini :</p> {/* Ajouter bouton pour sauvgarder dans le state du store le theme_id */}
          <div> {refreshed ? themes.map(theme => <button className='themeButton' key={theme.theme_id}>{theme.theme_name}</button>) : themes.slice(0, 5).map(theme => <button className='themeButton' key={theme.theme_id}>{theme.theme_name}</button>)}</div>
          <button className={refreshed ? 'refreshed' : 'refreshButton'} onClick={this.handleRefresh} type='button'>Plus de thèmes</button>
          <div>
            <button className='cancelButton' type='button'>Annuler</button> {/* Ajouter lien vers userpage */}
            <button className='validateButton' type='button'>Suivant</button> {/* Ajotuer lien vers next page choix des règles */}
          </div>
        </div>
      </div> /* bloquer le bouton */
    )
  }
}

export default BattleCreationTheme
