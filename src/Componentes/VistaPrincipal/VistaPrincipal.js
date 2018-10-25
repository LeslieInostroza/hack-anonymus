import React, { Component } from 'react';
import './Style.scss'
import './Style.scss';
import RecipeReviewCard from './../Tarjeta/Tarjeta';
import {Grid} from '@material-ui/core'
import VistaAyuda from '../ayuda/Ayuda';

class VistaPrincipal extends Component {
  render() {
    return (
      <div className="App">
      <Grid container justify={'center'}>
        <Grid item>
        <RecipeReviewCard />
        </Grid>
      </Grid>
      </div>
    );
  }
}
export default VistaPrincipal;
