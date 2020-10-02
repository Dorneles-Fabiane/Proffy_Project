//Sempre importar o React, mesmo que ele não seja usado
import React from 'react';

/*
Quando o nome do arquivo for Index e ele
estiver dentro da pasta não é preciso por ele
no src - Ex: import Landing from './pages/Landing - / index' 
*/

import './assets/styles/global.css';

import Routes from './routes';

//JSX - Javasxript + XML

//Componentes - React - são funções que retornam HTML
//Primeira letra do componente sempre deve ser maiúscula - Ex: "App" 
function App() {
  return (
    <Routes />
  );
}

export default App;
