import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import data from './../../data/data.json';
import { Divider, Paper } from '@material-ui/core';
// import './lista.css';


class InteractiveList extends React.Component {
  state = {
    dense: false,
    secondary: false,
    data: [],
  };

  componentWillMount() {
    let categorias = new Set();
    data.forEach(e => categorias.add(e.Categoria[0].categoria))

    let categoriasFinal = [];
    for (let ele of categorias) {
      categoriasFinal.push(ele)
    }
    this.setState({
      data: categoriasFinal
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div className='categoria'>
        <Grid>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item >
              <Typography variant="h2" style={{ marginTop: '38px' }} align='center'>
                Categorias
           </Typography>
            </Grid>
            <Grid container style={{ textAlign: 'center', marginTop: '6em' }}
              direction="row"
              justify="center"
              alignItems="center">
              {
                this.state.data.map((e, i) => (
                  <Grid item md={3} sm={3} xs={6}>
                    <Paper className={['paper-ty']} style={{ margin: '2em' }} elevation={1}>
                      <Typography variant="h5" component="h3">
                        {e}
                      </Typography>
                    </Paper>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default InteractiveList;
