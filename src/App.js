import React from 'react'
import './App.css';

import Header from './Componentes/Header/'
import FormularioCadastro from './Componentes/Formulario/'
import PostIt from './Componentes/Post-it/'

function App() {
  return (
    <div className="App">
      
      <Header />
      
      <div className='main'>

        <PostIt />
        <FormularioCadastro aoEnviar={aoEnviarForm} />

      </div>
    
    </div>
  );
}

function aoEnviarForm(dados) {

  console.log(dados)

}

export default App;
