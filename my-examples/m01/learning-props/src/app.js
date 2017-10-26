'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import Button from './button'

class App extends Component {
  render () {
    return (
      <div className='container'>
        Aplicação
        <Title name='Luciano' lastname='Baraúna' />

        <Title />

        {['blue', 'green', 'blue'].map((square, index) => (
          <Square key={index} color={square} />
        ))}

        <Square />

        <Button text='Texto' />
      </div>
    )
  }
}
export default App
