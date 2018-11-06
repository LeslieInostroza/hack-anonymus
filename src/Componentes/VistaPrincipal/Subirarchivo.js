import React, { Component } from 'react';
import './Style.scss';
import AppBar from '../AppBar/AppBar';
import {Grid} from '@material-ui/core'
import Uploadcsv from './../Uploadcsv';
import RecipeReviewCard from './../Tarjeta/Tarjeta';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

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
      <h2 style={{color:"grey", textAlign:"center", paddingTop:"20px",}}> Suba su archivo CSV</h2>
      <Grid container justify='center' style={{paddingTop:"30px",}}>
        <Grid item>
          <input style={{color:"grey", textAlign:"center", paddingTop:"20px", borderRadius:"5px"}} id="upload" ref="upload" type="file" accept=".csv" onChange={this.onChangeFile.bind(this)}/>
          <p style={{color:"grey", textAlign:"center", paddingTop:"30px",}}>Su archivo contiene {this.state.categoriasFinal.length} Productos para Categorizar.</p>
        </Grid>
      </Grid>
       
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
