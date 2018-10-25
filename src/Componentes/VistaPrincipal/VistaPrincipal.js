import React, { Component } from 'react';
import './Style.scss';
import RecipeReviewCard from './../Tarjeta/Tarjeta';
import AppBar from '../AppBar/AppBar';
import {Grid} from '@material-ui/core'

class VistaPrincipal extends Component {
  render() {
    return (
      <div className="App">
      <AppBar />

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
