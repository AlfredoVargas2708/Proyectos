import './App.css'
import Form from './Componentes/Form'
import List from './Componentes/List'
import React, {useState } from 'react'

function App() {
  const [paciente, setPaciente] = useState([{
    id: '',
    nombre: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
  }])
  return (
    <div className='app'>
      <div className='title'>
        <h1>Seguimiento de Pacientes <strong>Veterinaria</strong></h1>
      </div>
      <div className='container'>
        <Form />
        <List paciente={paciente}/>
      </div>
    </div>
  )
}

export default App
