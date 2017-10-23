'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        Aplicação
        <Title name='Luciano' lastname={0} />
        <Title name='Luciano' lastname={Number('2')} />
        <Title name='Luciano' lastname={[1,2,3]} />
        <Title name='Luciano' lastname={{firtsname: 'Baraúna'}} />
        <Title />
      </div>
    )
  }
})
export default App
