import React, { Component } from 'react';
import logo from '../../logo.svg';
import './../../App.css';
import Categoria from './Categoria/Categoria';
import './Style.scss'

class VistaPrincipal extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p id="parra">
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Categoria/>
        </header>
      </div>
    );
  }
}

export default VistaPrincipal;