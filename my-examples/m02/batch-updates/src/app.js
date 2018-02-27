'use strict'

import React, { Component } from 'react'
// import Title from './components/title'

import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      counter: 0
    }
  }

  incrementCounter (state) {
    return { counter: state.counter + 1 }
  }

  componentDidMount () {
    // this.setState({ counter: this.state.counter + 1 })
    // this.setState({ counter: this.state.counter + 1 })

    this.setState((state) => ({counter: state.counter + 1}))
    this.setState((state) => ({counter: state.counter + 1}))
    this.setState((state) => ({counter: state.counter + 1}))
    this.setState((state) => ({counter: state.counter + 1}))

    this.setState(this.incrementCounter)
    this.setState(this.incrementCounter)
    this.setState(this.incrementCounter)
    this.setState(this.incrementCounter)
  }

  render () {
    const { counter } = this.state
    console.log('render:', counter)
    return (
      <div>counter: {counter}</div>
    )
  }
}

export default App
