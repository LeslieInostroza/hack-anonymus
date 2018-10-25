import React, { Component } from 'react';
import { BrowserRouter as ReactRouter, Route, Redirect } from 'react-router-dom';
import App from './App';
import VistaPrincipal from './Componentes/VistaPrincipal/VistaPrincipal';
<<<<<<< HEAD
import Subirarchivo from './Componentes/VistaPrincipal/Subirarchivo'
=======
 import ListaCategoria from './Componentes/listaCategoria/ListaCategoria';
import Inicio from './Componentes/inicio/Inicio';


>>>>>>> vivi/master
class Routers extends Component {
  render(){
    return(
      <ReactRouter>
        <App>
<<<<<<< HEAD
          <Route path="/home" exac component={VistaPrincipal}></Route>
          <Route path="/subirarchivo" component={Subirarchivo}></Route>
=======
        <Route path="/" component={() => {
            return  <Redirect to="/inicio"></Redirect>
          }}></Route>
        <Route path="/inicio" exac component= {Inicio}></Route>
          <Route path="/home" component={VistaPrincipal}></Route>
          <Route path="/lista"  component={ListaCategoria}></Route>
>>>>>>> vivi/master
        </App>
      </ReactRouter>
    )

  }
}
export default Routers


