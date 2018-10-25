import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import data from './../../data/data.json';
import {Chip} from '@material-ui/core';


class InteractiveList extends React.Component {
  render() {
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
                  <Grid item md={4} sm={4}>
                    <p>{this.props.nombre}</p>
                  </Grid>
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
