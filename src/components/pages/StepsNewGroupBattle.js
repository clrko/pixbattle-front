import React, { Component } from 'react'
import Stepper from 'react-stepper-horizontal'

class StepsNewGroupBattle extends Component {
  render () {
    const { title, number } = this.props
    return (
      <Stepper
        steps={
          title.map((t, i) => (
            { title: t }
          ))
        }
        activeStep={number}
        activeColor='#FAC748'
        completeColor='#FAC748'
        defaultBarColor='#235789'
        completeBarColor='#FAC748'
        defaultTitleColor='#235789'
        completeTitleColor='#FAC748'
        circleFontColor='#3181C8'
      />
    )
  }
}

export default StepsNewGroupBattle
