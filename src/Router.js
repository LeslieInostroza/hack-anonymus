import React, { Component } from 'react'
import { BrowserRouter as ReactRouter, Route, Redirect } from 'react-router-dom';
import App from './App';
import VistaPrincipal from './Componentes/VistaPrincipal/VistaPrincipal';
class Routers extends Component {
  render(){
    return(
      <ReactRouter>
        <App>
          <Route path="/" exac component={VistaPrincipal}></Route>
        </App>
      </ReactRouter>
    )
  }
}

export default Routers;