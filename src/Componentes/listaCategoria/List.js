import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import data from './../../data/data.json';
import {Chip} from '@material-ui/core';



let  categorias = new Set();
 data.forEach(e => categorias.add(e.Categoria[0].categoria))

let categoriasFinal = [];
class InteractiveList extends React.Component {
  state = {
    dense: false,
    secondary: false,
    data: categoriasFinal,
  };

  componentWillMount(){ 
    for ( let ele of categorias ) {
      categoriasFinal.push(ele)
    }  
  }

  render() {
    console.log(categoriasFinal)
    return (
      <Grid>
      <Grid  container
  direction="row"
  justify="center"
  alignItems="center">
          <Grid item >
            <Typography align='center' variant="h6" >
              Text only
            </Typography>
      </Grid>
          <Grid  container
  direction="row"
  justify="space-around"
  alignItems="center">
                {
                this.state.data.map((e,i) => ( 
                  <Grid item md={3} sm={3}>
                    <p>{e}</p>
                  </Grid>
                ))  
                }
          </Grid>
          </Grid>
         
        </Grid>
    
        
    );
  }
}

InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default InteractiveList;
