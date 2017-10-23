'use strict'

import React, { Component } from 'react'
import Title from './title'

class App extends Component {
  render () {
    return (
      <div className='container'>
         Aplicação
         <Title name='Luciano' lastname='Baraúna' />
         <Title />
       </div>
    )
  }
}
export default App
