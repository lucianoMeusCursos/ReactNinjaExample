'use strict'

import React, { Component } from 'react'
import Button from './button'
import Square from './square'

class App extends Component {
  constructor () {
    super();
    this.state = {
      teste: 'green'
    }
  }

  render () {
    return (
     <div>
       <Square color={this.state.teste} />

       {['blue', 'red', 'green'].map(
          (color) => (
            <Button
              key={color}
              handleClick={() => {
                this.setState({ teste: color })
                }}>
              {color}
            </ Button>
          )
       )}
     </div>
    )
  }
}



export default App
