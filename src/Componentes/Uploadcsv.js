import React, { Component } from 'react';

class Uploadcsv extends Component {
  render() {
    return (
      <input id="upload" ref="upload" type="file" accept=".csv" onChange={this.onChangeFile.bind(this)}/>
    );
  }

  onChangeFile(event){
    var archivo = event.target.files[0];
    if (!archivo) {
      return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
      var contenido = e.target.result;
      console.log(procesarCsv(contenido));//muestra en la consola el contenido del archivo
     // mostrarContenido(contenido);
    };
    lector.readAsText(archivo);
  }

}

function procesarCsv(contenido){
    let filas = contenido.split(/\r?\n/); // Saca saltos de linea y hace arreglo
    let resultado = [];
    for(let i=0;i<filas.lenght; i++){
        console.log(filas[i]);
    }
    return filas;
  }
export default Uploadcsv;
