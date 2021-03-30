import React, { Component } from 'react';

import './App.css';
import logo from './logo.svg';

class App extends Component {
  state = {
    products: []
  }

  handleClick = (e) => {
    e.preventDefault()
    const result = {}

    console.log('clicou');

    this.setState({
      products: result
    })
  }

  render () {
    const { hasError } = this.props
    return (
      <div className="App">
        <header className="App-header">
          {hasError && <h1>Deu problema :-(</h1>}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.handleClick}
          >
            Obter produtos
          </a>
        </header>
        {this.state.products.map((prod) => (
          <div key={prod}>{prod}</div>
        ))}
      </div>
    )
  }
}


export default App;
