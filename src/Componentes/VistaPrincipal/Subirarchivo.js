import React, { Component } from 'react';
import './Style.scss';
import AppBar from '../AppBar/AppBar';
import {Grid} from '@material-ui/core'
import Uploadcsv from './../Uploadcsv';

class Subirarchivo extends Component {
  render() {
    return (
      <div className="App">

      <Grid container justify={'center'}>
        <Grid item>
            <Uploadcsv></Uploadcsv>
        </Grid>
      </Grid>
       
      </div>
    );
  }
}
export default Subirarchivo;
