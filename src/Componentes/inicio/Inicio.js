import React, { Component } from 'react';
import './Inicio.css';
import { Done, Description, TouchApp} from '@material-ui/icons';
import {Router,Redirect,Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';

class Inicio extends Component {
    
    render() {
        return (
            <div className= 'contenedorComponente'>
                <div className = 'titulo'>
                    <h1>Clasifica tus productos de manera fácil, ágil e intuitiva</h1>
                 </div> 
            <div className= 'contenedorIconos'>
                <Description className='iconos'></Description>
                <Link to="/lista">
                <TouchApp className='iconos important'></TouchApp>
                </Link>
               
                <Done className='iconos'></Done>
            </div>

            
            </div>
        )
    }
}

export default Inicio;