import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import data from './../../data/data.json';
import {Chip} from '@material-ui/core';



let  categorias = new Set();
 data.forEach(e => categorias.add(e.Categoria))

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
        <Grid container justify={'flex-start'}>
          <Grid item >
            <Typography variant="h6" >
              Text only
            </Typography>
      <div>
                {
                this.state.data.map((e,i) => ( 
                  <Chip  label={e}></Chip>
                ))  
                }
          </div>
          </Grid>
         
        </Grid>
    );
  }
}

InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default InteractiveList;
