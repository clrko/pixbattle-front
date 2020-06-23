import React, { Component } from 'react'
import CreationBattleDeadline from './CreationBattleDeadline'
import CreationBattleRule from './CreationBattleRule'
import CreationBattleTheme from './CreationBattleTheme'
import CreationGroup from './CreationGroup'
import Steps from './CreationStepper'

class CreationSteps extends Component {
  state = {
    stepsTitles: ['Ton groupe', 'Ta battle: le thème', 'Ta battle: les options', 'Ta battle: la deadline'],
    stepsNumbers: 0
  }

  getContent = () => {
    switch (this.state.stepsNumbers) {
      case 0:
        return <CreationGroup changeStep={this.changeStepsNumber} params={this.props.match.params.id} />
      case 1:
        return <CreationBattleTheme changeStep={this.changeStepsNumber} />
      case 2:
        return <CreationBattleRule changeStep={this.changeStepsNumber} />
      case 3:
        return <CreationBattleDeadline changeStep={this.changeStepsNumber} />
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

export default CreationSteps
