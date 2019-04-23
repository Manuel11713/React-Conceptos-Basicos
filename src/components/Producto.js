import React, {Component} from 'react';

class Producto extends Component{
    render(){
        const {nombre,precio} = this.props.producto;
        return <li>
            <h3>{nombre}</h3>
            <p>Precio: {precio} </p>
        </li>
    }
}

export default Producto;