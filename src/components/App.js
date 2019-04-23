import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {
  render() {
    const empleado ={//Esta area usa javascript y 'return' usar JSX
      nombre:'Juan',
      trabajo:'Desarrollador Web'
    }
    return (
      <React.Fragment>{/*React.Fragment hace que no sea necesario colocar un <Div/>*/}        <h1 className="titulo">Información del empleado</h1>
        <p>Nombre: {empleado.nombre}</p>
        <p>Trabajo: {empleado.trabajo} </p>
      </React.Fragment>
    );
  }
}

export default App;
