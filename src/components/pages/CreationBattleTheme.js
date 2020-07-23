import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import classnames from 'classnames'
import { ADD_THEME } from '../../store/action-types'
import './CreationBattle.css'

class CreationBattleTheme extends Component {
  state = {
    themes: [],
    refreshed: false,
    selectedTheme: {
      themeId: 0,
      themeName: ''
    },
    isTheme: false
  }

  handleRefresh = () => {
    this.setState({ refreshed: !this.state.refreshed })
  }

  handleThemeChange = e => {
    const selectedTheme = Object.assign({}, this.state.selectedTheme)
    selectedTheme.themeId = Number(e.target.id)
    selectedTheme.themeName = e.target.value
    this.setState({
      selectedTheme: selectedTheme,
      isTheme: true
    })
  }

  handleChangeSteps = e => {
    const selectedTheme = this.state.selectedTheme
    const { dispatch, history } = this.props
    dispatch({ type: ADD_THEME, selectedTheme })
    if (this.props.changeStep) {
      return this.props.changeStep(e)
    }
    return history.push('/battle-creation/rule')
  }

  componentDidMount () {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/battle/battle-creation/themes`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(res => {
        this.setState({ themes: res.data })
      })
  }

  render () {
    const { themes, refreshed, selectedTheme, isTheme } = this.state
    const displayedThemes = refreshed ? themes : themes.slice(0, 5)
    return (
      <div className='battleCreation-page'>
        <div className='cardBattle'>
          <h1 className='cardBattle-color'>Choisis un thème</h1>
          <div className='battleCreation-themeContainer'>
            {
              displayedThemes.map(theme => (
                <Fragment key={theme.theme_id}>
                  <label
                    htmlFor={theme.theme_id}
                    className={classnames('battle-btn battle-optionButton', {
                      'battle-optionButton-selected': selectedTheme.themeId === theme.theme_id
                    })}
                  >
                    <input
                      type='radio'
                      name='themeButton'
                      value={theme.theme_name}
                      checked={selectedTheme.themeId === theme.theme_id}
                      onChange={this.handleThemeChange}
                      id={theme.theme_id}
                    />
                    {theme.theme_name}
                  </label>
                </Fragment>
              ))
            }
          </div>
          <div className='div-button-refreshed'>
            <button
              className={refreshed ? 'refreshed' : 'refreshButton'}
              onClick={this.handleRefresh}
              type='button'
            >
              <p className='p-refreshButton'>+</p>
            </button>
          </div>
          <div className='battleCreation-btnContainer'>
            <button
              className={
                isTheme
                  ? 'battleCreation-validateButton battle-btn'
                  : 'battleCreation-validateButton-disable battle-btn'
              }
              onClick={this.handleChangeSteps}
              type='button'
              disabled={!isTheme}
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
