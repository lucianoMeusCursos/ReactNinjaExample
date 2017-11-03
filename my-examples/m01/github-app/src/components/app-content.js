'use strict'

import React, { Component } from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = () => (
  <div className="app">
    <Search />
    <UserInfo />
    <Actions />

    <Repos
      clasName="repos"
      title="Repositórios:"
      repos={[{
        name: "link qualquer",
        link: "link qualquer"
      }]}
    />

    <Repos
      clasName="starred"
      title="Favoritos:"
      repos={[{
        name: "link qualquer",
        link: "link qualquer"
      }]}
    />

  </div>
)

export default AppContent
