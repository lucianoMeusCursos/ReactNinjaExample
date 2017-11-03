'use strict'

import React, { Component } from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

class App extends Component {

  render () {

    return (
      <div className="app">
        <Search />
        <UserInfo />
        <Actions />

        <Repos
          clasName="repos"
          title="Repositórios:"
          repos={[{
              name: "link qualquer",
              link:"link qualquer"
            }]}
          />

        <Repos
          clasName="starred"
          title="Favoritos:"
          repos={[{
              name: "link qualquer",
              link:"link qualquer"
            }]}
          />

      </div>
    )
  }
}
export default App
