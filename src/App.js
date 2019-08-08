import React,  {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Pregunta from './Step'
import qa from './qa.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 0,
      response: '',
      error: false,
      finalReached: false
    }
  }

  onChange = ({target}) => {
    this.setState({
      response: target.value
    })
  }

  checkAnswer = () => {
    const {currentStep, response} = this.state
    if(currentStep+1 === qa.length) {
      return this.setState({
        finalReached: true
      })
    }
    
    let error = true
    let answers = qa[currentStep].answers
    let state = {}
    if (answers.length >= 1) {
      answers.forEach(a => {
        if (a === response) {
          error = false
        }
      })
      
      if (error) {
        state.error = true
      } else {
        state = {
          error: false,
          currentStep: currentStep+1,
          response: ''
        }
      }
    } else {
      state.currentStep = currentStep+1
    }

    this.setState(state)
  }

  render() {
    const {error, currentStep, response, finalReached} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {
            finalReached 
              ? <h1>Que tengas un Hermoso dia! Feliz Cumpleaños!</h1>
              :<div>
                <Pregunta step={currentStep} showHint={error}/>
                <input placeholder="respuesta" value={response} onChange={this.onChange} />
                <button onClick={this.checkAnswer}>
                  Next
                </button>
              </div>
          }
        </header>
      </div>
    );
  }
}

export default App;
