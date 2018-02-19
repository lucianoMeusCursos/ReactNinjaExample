'use strict'

import React, { Component } from 'react'
// import Title from './components/title'

import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      title: '...',
      Component: `div`
    }
  }

  getTItle () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('My app with async / await!')
      }, 2000)
    })
  }

  async componentDidMount () {
    const Title = await import(`components/title`)
    this.setState({
      title: await this.getTItle(),
      Component: title.default
    })
  }

  render () {
    return (
      <div>
        <this.state.Component>{this.state.title}</this.state.Component>
      </div>
    )
  }
}

export default App
