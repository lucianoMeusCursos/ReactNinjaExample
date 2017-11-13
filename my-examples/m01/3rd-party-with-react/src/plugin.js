'use struct'

import React, { Component } from 'react'

class Plugin extends Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
    // this.handlePress = this.handlePress.bind(this)
  }

  handleClick () {
    console.log('clicou no botão!', this.myInput)
    this.myInput.focus()
  }

  handlePress(target){
    target.charCode === 13 ? alert('Opa apertou enter') : ''
  }

  render () {
    return (
      <div>
        <input type='text' onKeyPress={(e) => this.handlePress(e)} ref={(node) => (this.myInput = node)} />
        <button onClick={this.handleClick}>Focus</button>
      </div>
    )
  }
}

export default Plugin
