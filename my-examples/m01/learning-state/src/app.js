'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {
  constructor () {
    super()
  }

  componentWillMount () {
    console.log('componentWillMount app')
  }

  componentDidMount () {
    console.log('componentDidMount app')
  }

  render () {
    console.log('render app')
    return (
     <div>
      My app
      <Button handleClick={() => console.log('clicou')}>
        Clica em mim
      </ Button>
     </div>
    )
  }
}
export default App
