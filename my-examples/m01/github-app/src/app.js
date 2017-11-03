'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        username: "Luciano Baraúna",
        repos: 12,
        followers: 10,
        following: 20
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Fav',
        link: '#'
      }]
    }
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}

export default App
