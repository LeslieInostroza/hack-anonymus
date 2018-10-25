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
import { TextField, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';

import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

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
    listChecket:'',
    categoriaChecket:'',
    subcategoriaChecket:'',
    customtext :''
  };
  handleCunstomText(event){
    let customText = event.target.value;
    this.setState({ customtext: customText });
    this.props.sendCustomText(customText);
  }
  
  handleChangeLine = event => {
    let linea = event.target.id.split('_')[2];
    this.setState({ listChecket: linea });
    this.props.sendLinea(linea);

  };
  handleChangeCategoria = event => {
    let cat = event.target.id.split('_')[2];
    console.log(cat);
    this.setState({ categoriaChecket: cat });
    this.props.sendCategoria(cat);

  };

  handleChangeSubCategoria = event => {
    let subCat = event.target.id.split('_')[2];
    console.log(subCat);
    this.setState({ subcategoriaChecket: subCat });
    this.props.sendSubCategoria(subCat);

  };
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List>
          <ListItemText primary={`Linea de Producto `} />
          {
            this.props.categorias.map(element =>
              <ListItem key={'list_' + element.id + this.props.busqueda} dense button className={classes.listItem}>
                <ListItemText  primary={element.Linea} />
                <ListItemSecondaryAction >
                
                  <input id={'linea_' + element.id +'_' + element.Linea + '_' + this.props.busqueda} 
                  key={'linea_' + element.id + this.props.busqueda} type="radio" 
                  name={'linea'} onChange={this.handleChangeLine.bind(this)}
                  ></input>
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
                <ListItem key={'CatlistItem_' + catElement.id + this.props.busqueda}  dense button className={classes.listItem}>
                  <ListItemText primary={catElement.Categoria} />
                  <ListItemSecondaryAction>
                  <input id={'categoria_' + element.id +'_' + catElement.Categoria + '_' + this.props.busqueda} 
                   key={'Categoria_' + catElement.id} type="radio" 
                  name={'Categoria'} onChange={this.handleChangeCategoria.bind(this)}
                  ></input>
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
                <ListItem key={'SubListItem_' + subElement.id} dense button className={classes.listItem}>
                    <ListItemText primary={subElement.SubCategoria} />
                    <ListItemSecondaryAction>
                    <input id={'SubCategoria_' + element.id +'_' + subElement.SubCategoria + '_' + this.props.busqueda} 
                     key={'SubCategoria_' + subElement.id} 
                    type="radio" name={'subCategoria'}
                    onChange={this.handleChangeSubCategoria.bind(this)}
                   ></input>
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
          onChange={this.handleCunstomText.bind(this)}
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
