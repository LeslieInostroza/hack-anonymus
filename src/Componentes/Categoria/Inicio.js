import React, { Component } from 'react';
import './Categoria.css';

class Categoria extends Component {
    
    render() {
        return (
            <div>
                <div>
                    <div className= "tarjeta">
                        <h4>Categoria</h4>
                        <div>
                            
                            <ul>linea de Producto</ul>
                            <ul>Categoria</ul>
                            <ul>Sub Categoria</ul>
                            <ul>Marca</ul>  
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categoria;