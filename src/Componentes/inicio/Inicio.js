import React, { Component } from 'react';
import './Inicio.css';
import { Done, Description, TouchApp} from '@material-ui/icons';
import Router from 'react-router-dom';

class Inicio extends Component {
    
    render() {
        return (
            <div className= 'contenedorComponente'>
                <div className = 'titulo'>
                    <h1>Clasifica tus productos de manera fácil, ágil e intuitiva</h1>
                 </div> 
            <div className= 'contenedorIconos'>
                <Description className= 'iconos'></Description>
                <TouchApp className= 'iconos important'></TouchApp>
                <Done className= 'iconos'></Done>
            </div>

            
            </div>
        )
    }
}

export default Inicio;