import React, { Component } from 'react'
import { BrowserRouter as ReactRouter, Route, Redirect } from 'react-router-dom';
import App from './App';
import VistaPrincipal from './Componentes/VistaPrincipal/VistaPrincipal';
import Subirarchivo from './Componentes/VistaPrincipal/Subirarchivo'
class Routers extends Component {
  render(){
    return(
      <ReactRouter>
        <App>
          <Route path="/home" exac component={VistaPrincipal}></Route>
          <Route path="/subirarchivo" component={Subirarchivo}></Route>
        </App>
      </ReactRouter>
    )
  }
}
export default Routers;


