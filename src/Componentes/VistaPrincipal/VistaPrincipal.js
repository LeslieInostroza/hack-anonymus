import React, { Component } from 'react';
import './Style.scss';
import RecipeReviewCard from './../Tarjeta/Tarjeta';
import AppBar from '../AppBar/AppBar';

class VistaPrincipal extends Component {
  render() {
    return (
      <div className="App">
      <AppBar />
       <RecipeReviewCard />
      </div>
    );
  }
}
export default VistaPrincipal;
