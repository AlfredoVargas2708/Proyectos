import './App.css'
import Form from './Componentes/Form'
import React, {useState } from 'react'
import List from './Componentes/List'

function App() {
  const [paciente, setPaciente] = useState([{
    id: 0,
    nombre: '',
    apellido: '',
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
        <Form
        setPaciente={setPaciente}/>
        <List
        paciente={paciente}/>
      </div>
    </div>
  )
}

export default App
