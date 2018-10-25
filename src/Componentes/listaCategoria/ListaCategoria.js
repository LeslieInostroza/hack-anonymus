import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import List  from './List';
class ListaCategoria extends Component {
  render(){
    return(
      <div className="App">
      <Grid container justify={'center'}>
        <Grid item>
          <List />
        </Grid>
      </Grid>
      </div>
    )
  }
}

export default ListaCategoria;
