import React, { Component } from 'react';
import AppBar from './Componentes/AppBar/AppBar';

class App extends Component {
  render() {
    return (
      <div>
      <AppBar />
        {
          this.props.children
        }
      </div>
    )
  }
}

export default App;
