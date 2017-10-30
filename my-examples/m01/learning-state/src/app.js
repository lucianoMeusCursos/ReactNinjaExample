'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super();
    this.state = {
      text: 'Luciano'
    }
  }

  render () {
    return (
      <div className='container'>
        {this.state.text}
      </div>
    )
  }
}



export default App
