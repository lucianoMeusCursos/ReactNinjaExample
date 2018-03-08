import React, { Component } from 'react'
// import './css/style.css'

class App extends Component {

  constructor() {
    super()
    this.state = { value: '' }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value
      })
    }
  }


  render() {
    return (
      <div className='editor'>
        <textarea value={this.state.value} onChange={this.handleChange}></textarea>
        <div className='view'>
          {this.state.value}
        </div>
      </div>
    )
  }

}

export default App
