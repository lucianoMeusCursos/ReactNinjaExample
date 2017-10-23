'use strict'

import React from 'react'

const Title = React.createClass({
  getDefaultProps: function () {
    return {
      // name: 'Desconhecido',
      name: Number('2'),
      lastname: {
        firtsname: 'valor dentro de lastname'
      }
    }
  },

  render: function () {
    return (
      <h1> Olá {this.props.name + ' ' + this.props.lastname.firtsname} </h1>
    )
  }
})

export default Title
