import React, {Component} from 'react'
import qa from './qa.json'

class Pregunta extends Component {
  render() {
    const {step, showHint} = this.props
    const currentQuestion = qa[step]
    if (!currentQuestion) return null
    const {question, hint} = currentQuestion
    return (
      <div>
        <h1>{question}</h1>
        {
          showHint && <h6>WRONG! hint: {hint}</h6>
        }
      </div>
    )
  }
}

export default Pregunta
