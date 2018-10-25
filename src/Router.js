import React, { Component } from 'react';
import { BrowserRouter as ReactRouter, Route, Redirect } from 'react-router-dom';
import App from './App';
import VistaPrincipal from './Componentes/VistaPrincipal/VistaPrincipal';
import ListaCategoria from './Componentes/listaCategoria/ListaCategoria';;


export default class Router extends Component {
  constructor() {
    super();
    this.state = {
      user: false
    }
  }


  render() {
    return (
      <ReactRouter>
        <App>
          <Route path="/home" exac component={VistaPrincipal}></Route>
          <Route path="/lista"  component={ListaCategoria}></Route>
        </App>
      </ReactRouter>
    )

  }
}


