'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super();
    this.state = {
      text: 'Luciano',
      numero: 2
    }
  }

  render () {
    return (
      <div className='container' onClick={() => this.setState({
        text: "Olá Bem Vindo"
      })}>
        {this.state.text}
      </div>
    )
  }
}



export default App
