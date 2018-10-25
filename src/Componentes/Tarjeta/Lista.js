import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Switch from './Switch';
import { Typography, TextField } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class CheckboxListSecondary extends React.Component {
  state = {
    checked: [1],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
          <ListItemText primary={`Linea de Producto `} />
          {
            this.props.categorias.map(element =>
              <ListItem  dense button className={classes.listItem}>
                <ListItemText primary={element.Linea} />
                <ListItemSecondaryAction>
                <Switch />
                </ListItemSecondaryAction>
              </ListItem>
            )
          }

        
        </List>
        <List>
          <ListItemText primary={`Categoria `} />
            {
              this.props.categorias.map(element =>
                element.Categoria.map(catElement =>
                  <ListItem  dense button className={classes.listItem}>
                  <ListItemText primary={``+ catElement.Categoria} />
                  <ListItemSecondaryAction>
                  <Switch />
                  </ListItemSecondaryAction>
                </ListItem>
              )

              )
            }

        </List>
        <List>
          <ListItemText primary={`Sub Categoria`} />
          {
            this.props.categorias.map(element =>
              element.Categoria.map(catElement =>
                catElement.SubCategoria.map(subElement =>
                <ListItem  dense button className={classes.listItem}>
                    <ListItemText primary={subElement} />
                    <ListItemSecondaryAction>
                    <Switch />
                    </ListItemSecondaryAction>
                  
                </ListItem>                  
                  )
                ))

          }

            <TextField
          id="standard-search"
          label="ej: sabor manzana"
          type="search"
          className={classes.textField}
          margin="normal"
        />
        </List>
      </div>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxListSecondary);
