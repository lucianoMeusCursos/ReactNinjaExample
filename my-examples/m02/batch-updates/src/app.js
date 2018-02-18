'use strict'

import React, { Component } from 'react'
import Title from './components/title'

import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = { title: '...' }
  }

  getTItle () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('My app with async / await!')
      }, 2000)
    })
  }

  async componentDidMount () {
    let result
    try {
      this.setState({
        title: await this.getTItle()
      })
    } catch (error) {}
  }

  render () {
    return (
      <div>
        <Title>{this.state.title}</Title>
      </div>
    )
  }
}

export default App
