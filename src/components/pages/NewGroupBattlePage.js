import React, { Component } from 'react'
import BattleCreationDeadline from './BattleCreationDeadline'
import BattleCreationRule from './BattleCreationRule'
import BattleCreationTheme from './BattleCreationTheme'
import GroupNew from './GroupNew'
import Steps from './StepsNewGroupBattle'

class NewGroupBattlePage extends Component {
  state = {
    stepsTitles: ['Ton groupe', 'Ta battle: le thème', 'Ta battle: les options', 'Ta battle: la deadline'],
    stepsNumbers: 0
  }

  getContent = () => {
    switch (this.state.stepsNumbers) {
      case 0:
        return <GroupNew changeStep={this.changeStepsNumber} />
      case 1:
        return <BattleCreationTheme changeStep={this.changeStepsNumber} />
      case 2:
        return <BattleCreationRule changeStep={this.changeStepsNumber} />
      case 3:
        return <BattleCreationDeadline changeStep={this.changeStepsNumber} />
      default:
        return <></>
    }
  }

  changeStepsNumber = e => {
    this.setState({ stepsNumbers: this.state.stepsNumbers + 1 })
  }

  render () {
    return (
      <div>
        <Steps
          title={this.state.stepsTitles}
          number={this.state.stepsNumbers}
        />
        {this.getContent()}
      </div>
    )
  }
}

export default NewGroupBattlePage
