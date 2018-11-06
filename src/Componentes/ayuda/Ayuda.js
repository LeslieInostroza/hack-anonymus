
import React, { Component } from 'react';
import './Ayuda.css';

class VistaAyuda extends Component {
    render() {
        return(
            <div className='contenedorVista'>
                <div className='titulo3'>
                <h2>¿Como puedo etiquetar un producto?</h2>
                </div>
                <div className='lista'>
                    <ol>
                        <li>El primer paso es ingresar el listado de tus
                            productos en formato svg, esto atraves del boton que 
                            indica 'INGRESA EL LISTADO DE TUS PRODUCTOS'
                        </li>
                        <br/>
                        <li>Luego debes seleccionar cualquiera de los productos
                            que se encuentren en tu lista.
                        </li>
                        <br/>
                        <li>Una vez seleccionado, nuestro sistema
                            te ofrecera las mejores alternativas de categorias
                            segun coincidencia de palabras que ingreses en el input.
                        </li>
                        <br/>
                        <li>Finalmente debes escoger la que concideres mas adecuada, una vez 
                            seleccionado tu producto pasara a estar en la lista de elementos 
                            categorizados.
                        </li>

                    </ol>
                </div>
                
            </div>
        )
    }
}



export default VistaAyuda;
