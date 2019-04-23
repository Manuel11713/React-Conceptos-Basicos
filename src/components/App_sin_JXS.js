import React, { Component } from 'react';

class AppsinJSX extends Component {
  render() {
    return (
      React.createElement(
          'div',
          null,
          React.createElement(//un input dentro del div
              'input',
              {type:"text",value:'Valor del input'}
          )

      )
    );
  }
}

export default AppsinJSX;
