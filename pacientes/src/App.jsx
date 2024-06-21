import './App.css';
import Form from './Componentes/Form';
import React, { useState } from 'react';
import List from './Componentes/List';

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className='app'>
      <div className='title'>
        <h1>Seguimiento de Pacientes <strong>Veterinaria</strong></h1>
      </div>
      <div className='container'>
        <Form setPacientes={setPacientes} />
        <List pacientes={pacientes} />
      </div>
    </div>
  );
}

export default App;
