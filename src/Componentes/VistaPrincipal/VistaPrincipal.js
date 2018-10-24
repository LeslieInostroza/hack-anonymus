import React, { Component } from 'react';

import './Style.scss'
import './Style.scss';
import RecipeReviewCard from './../Tarjeta/Tarjeta';
import AppBar from '../AppBar/AppBar';
import Inicio from '../inicio/Inicio';

class VistaPrincipal extends Component {
  render() {
    return (
      <div className="App">
      {/* <AppBar /> */}
       {/* <RecipeReviewCard /> */}
       < Inicio/>
      </div>
    );
  }
}
export default VistaPrincipal;
