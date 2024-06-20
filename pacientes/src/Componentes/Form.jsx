import React from 'react'

const Form = () => {
    return (
        <div>
            <div>
                <h2>Seguimiento Pacientes</h2>
                <h6>Añade Pacientes y <strong>Administralos</strong></h6>
            </div>
            <div className='form'>
                <form>
                    <h6>PACIENTE</h6>
                    <input
                        type='text'
                        placeholder='Nombre del Paciente' />
                    <h6>PROPIETARIO</h6>
                    <input
                        type='text'
                        placeholder='Nombre del Propietario' />
                    <h6>EMAIL</h6>
                    <input
                        type='text'
                        placeholder='Email de Registro' />
                    <h6>FECHA ALTA</h6>
                    <input
                        type='date'
                        placeholder='Nombre del Paciente' />
                    <h6>SÍNTOMAS</h6>
                    <input
                        type='text'
                        placeholder='Síntomas del Paciente' />
                    <button>GUARDAR CLIENTE</button>
                </form>
            </div>
        </div>
    )
}

export default Form
