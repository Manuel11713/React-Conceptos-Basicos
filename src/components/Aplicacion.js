import React from 'react';
import Header from './Header';
import Productos from './Productos';
import Footer from './Footer';
class Aplicacion extends React.Component{ 
    constructor(props){
        super();
        this.state = {
            productos: []
        }
    }
    componentDidMount(){
        const productos = [
            {nombre:'Libro',precio:'$200'},
            {nombre:'CD',precio:'$124'},
            {nombre:'Instrumento Musical',precio:'$3500'},
            {nombre:'Audifonos',precio:'$60'},
            {nombre:'Tenis',precio:'$750'}
        ]
        
        setTimeout( ()=>{//Simulamos una consulta a una API que dura 3 segundos
            this.setState({
                productos
            });
        },3000)
        
    }
    render(){
        return(
            <React.Fragment>
                <Header titulo="Nuestra Tienda Virtual"/>
                <Header titulo="Nuestra Tienda Virtual 2"/>
                <Productos
                    productos = {this.state.productos}
                />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Aplicacion;