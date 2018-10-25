import React, { Component } from 'react';
import './Style.scss';
import AppBar from '../AppBar/AppBar';
import {Grid} from '@material-ui/core'
import Uploadcsv from './../Uploadcsv';
import RecipeReviewCard from './../Tarjeta/Tarjeta';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


// function procesarCsv(contenido){

  
  
//   let filas = contenido.split(/\r?\n/); // Saca saltos de linea y hace arreglo
//   categoriasFinal.push(filas);
//   let resultado = [];
//   //for(let i=0;i<filas.lenght; i++){
//     //  console.log(filas[i]);
//   //}
//   return filas;
// }

class Subirarchivo extends Component {

  constructor(){
    super();
    this.state = {
      data: [],
      categoriasFinal : []
    }
   
  }
  onChangeFile(event){
    console.log("Entro al archivo");
    var archivo = event.target.files[0];
    if (!archivo) {
      return;
    }
  
    var lector = new FileReader();
    lector.onload = (e) => {
      var contenido = e.target.result;
      let filas = contenido.split(/\r?\n/); 
      this.setState({
        ...this.state,
        categoriasFinal : filas
      });
      // procesarCsv(contenido)
      //categoriasFinal.push();
      console.log("leido...");
    
    };
    lector.readAsText(archivo);
  }

  render() {
    console.log(this.state.categoriasFinal);
    return (
      <div className="App">
       <input id="upload" ref="upload" type="file" accept=".csv" onChange={this.onChangeFile.bind(this)}/>
       <p>Su archivo contiene {this.state.categoriasFinal.length} Productos para Categorizar.</p>
      <ResponsiveMasonry columnsCountBreakPoints={{350:1,750:2,900:3}}>
      <Masonry>
       {
         this.state.categoriasFinal.map((element) => 
          
            <RecipeReviewCard key={element} busqueda={element} ></RecipeReviewCard>
           
        )
       }
       </Masonry>
       </ResponsiveMasonry>
      </div>
    );
  }
}

/* <input id="upload" ref="upload" type="file" accept=".csv" onChange={this.onChangeFile.bind(this)}/> */
//<Grid item md={3} sm={3}>
//<p>{element}</p>
//<RecipeReviewCard busqueda={element} />
//</Grid>
export default Subirarchivo;
