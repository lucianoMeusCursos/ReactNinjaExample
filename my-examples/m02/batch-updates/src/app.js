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


// class App extends Component {
//   constructor () {
//     super()
//     this.state = { counter: 0 }
//   }

//   incrementCounter (state) {
//     return { counter: state.counter + 1 }
//   }

//   incrementCounter2 (state) {
//     return { counter: state.counter + 2 }
//   }

//   componentDidMount () {
//     this.setState(this.incrementCounter)
//     this.setState(this.incrementCounter)
//     this.setState(this.incrementCounter)
//     this.setState(this.incrementCounter2)
//   }

//   render () {
//     console.log(`opa --- `, this.state)
//     const { counter } = this.state
//     console.log('render:', counter)

//     return (
//       <div>counter: {counter}</div>
//     )
//   }
// }


export default App
