import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Lista from './Lista';
import './Tarjeta.css';
import {Grid} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { TextField, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';

import dataPrincipal from './../../data/data.json';//trae el archivo madre

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  state = { 
    expanded: false,
    data:[],
    linea:'',
    categoria:'',
    subCategoria:'',
    customtext:'',
    visible:true
   };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  sendLinea(event){
    this.setState({ linea: event });
  }
  sendCategoria(event){
    this.setState({ categoria: event });
  }
  sendSubCategoria(event){
    this.setState({ subCategoria: event });
  }
  sendCustomText(event){
    this.setState({ subCategoria: event });
  }

  render() {
    const { classes } = this.props;
    let categorias = buscar(this.props.busqueda);
    //console.log(categorias);
    //console.log(this.state.visible); //False al apretar boton grabar
    //this.setState(state => ({ data: buscar(this.props.busqueda) }));
    
    return (
      this.state.visible ?
      <Card className={classes.card} style={{width: '25em', marginBottom: '15px', marginLeft:'70px'}}>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.busqueda}
        />
        <CardContent>
          <Lista categorias={categorias} busqueda={this.props.busqueda} 
            sendLinea={this.sendLinea.bind(this)}
            sendCategoria={this.sendCategoria.bind(this)}
            sendSubCategoria={this.sendSubCategoria.bind(this)}
            sendCustomText={this.sendCustomText.bind(this)}
            />
          <Button className="btnCard" key={this.props.busqueda} onClick={this.grabar.bind(this)} variant="contained" size="small" className={classes.button}>
            <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
            grabar
          </Button>
        </CardContent>
      </Card>  
      :null
    );
  }

  grabar(event){
    let seleccion = {
      "buscar":this.props.busqueda,
      "linea":this.state.linea,
      "categoria":this.state.categoria,
      "subCategoria":this.state.subCategoria,
      "customtext":this.state.customtext
    };

    console.log('grabar:');
    console.log(seleccion);
    this.setState({ visible: false });
  }
  /*
  clickBoton(event){
    let resultado = buscar('Agua Lacteos gaseosa');
    console.log(resultado);
  }*/

}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};



function buscar(titulo){
  console.log("buscando:" + titulo);
  //let palabra = 'Bebidas agua';
  let palabras = titulo.toLowerCase().split(' ');
  let alinea = [];
  let id =0;


  let result = false;
  for(let i=0;i<palabras.length;i++){
    for(let lineaI=0;lineaI<dataPrincipal.length;lineaI++){
      let linea = dataPrincipal[lineaI];
      let aCategoria = [];
      for(let catI=0;catI<linea.Categoria.length;catI++){

        let categoria = linea.Categoria[catI];
        let aSubCategoria = [];
        
        for(let subI=0;subI<categoria.SubCategoria.length;subI++){

          let SubCategoria = categoria.SubCategoria[subI];
          //console.log(SubCategoria);
          if(SubCategoria.SubCategoria.toLowerCase().indexOf(palabras[i]) > -1){
            aSubCategoria.push({"id":id.toString(),"SubCategoria":SubCategoria.SubCategoria});
          }
          id++;
        }
        if(aSubCategoria.length>0){
          aCategoria.push({"id":id.toString(),"Categoria" :categoria.categoria, "SubCategoria" :aSubCategoria});
        }else{
          if(categoria.categoria.toLowerCase().indexOf(palabras[i]) > -1){
            aCategoria.push({"id":id.toString(),"Categoria" :categoria.categoria, "SubCategoria" :[]});
          }
        }
        id++;
      }  
      id++;  
      if(aCategoria.length>0){
        alinea.push({"id":id.toString(),"Linea":linea.Linea, "Categoria" :aCategoria});
      }else{
        if(linea.Linea.toLowerCase().indexOf(palabras[i]) > -1){
          alinea.push({"id":id.toString(),"Linea":linea.Linea, "Categoria" :[]});
        }
      }
    }
  }
  return alinea;
}


export default withStyles(styles)(RecipeReviewCard);
