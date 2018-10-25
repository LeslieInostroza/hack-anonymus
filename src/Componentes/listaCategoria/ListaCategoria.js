import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import List  from './List';
import data from './../../data/data.json';
class ListaCategoria extends Component {
  state = {
    dense: false,
    secondary: false,
    data: [],
  };

  componentWillMount(){ 
    let  categorias = new Set();
    data.forEach(e => categorias.add(e.Categoria[0].categoria))

    let categoriasFinal = [];
    for ( let ele of categorias ) {
      categoriasFinal.push(ele)
    }  
   
    this.setState({data: [categoriasFinal]})
  }
  render(){
    console.log(this.state.data)
    return(
      <div>
        {
          this.state.data.map(e => (
            <p> {e}</p>
          ))
         
        }
      </div>
  )} 
}
export default ListaCategoria;
