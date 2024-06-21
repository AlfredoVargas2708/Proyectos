import './App.css'
import Form from './Componentes/Form'

function App() {
  return (
    <div>
      <div className='titulo'>
        <h1>Aplicación Full-Stack</h1>
        <hr></hr>
      </div>
      <div className='contenido'>
        <div className='agregar'>
          <div className='subtitulos'>
            <h4>Agregar Nuevo Empleado</h4>
          </div>
          <Form />
        </div>
        <div className='lista'>
          <div>
            <h4>Lista de Empleados</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
