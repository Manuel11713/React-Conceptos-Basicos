import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
//import App from './components/App';
//import AppsinJXS from './components/App_sin_JXS';
import Aplicacion from './components/Aplicacion'
import * as serviceWorker from './serviceWorker';


// //React sin JSX
// const titulo = React.createElement(
//     'h1',//Tipo de elemento que queremos crear
//     {id:'Titulo', className: 'encabezado'},//propiedades del elmento
//     'Hola Mundo'//Contenido del elemento
// );

//ReactDOM.render(<AppsinJXS />, document.getElementById('root'));
//ReactDOM.render(titulo, document.getElementById('root'));//renderizamos el titulo en vez de la App
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Aplicacion/>, document.getElementById('root'));

serviceWorker.unregister();
