import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import data from './../../data/data.json';

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
      <Grid>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center">
          <Grid item >
            <Typography style={{marginTop: '38px'}} align='center' variant="h6" >
              categorias
           </Typography>
          </Grid>
          <Grid container style={{ textAlign: 'center', marginTop: '6em' }}
            direction="row"
            justify="center"
            alignItems="center">
            {
              this.state.data.map((e, i) => (
                <Grid item md={3} sm={3} xs={6}>
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
