import React, {Component} from 'react';
import Producto from './Producto';

class Productos extends Component{
    render(){
        return(
            <div>
                <h2>Listado de Productos</h2>
                <ul>
                    {Object.keys(this.props.productos).map(key=>{
                        return(
                            <Producto
                                key = {key}
                                producto={this.props.productos[key]}
            
                            />
                        );
                    })}
               </ul>
            </div>
        )
    }
}

export default Productos;