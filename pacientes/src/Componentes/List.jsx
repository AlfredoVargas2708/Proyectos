import React, { useState } from 'react'

const List = ({paciente}) => {
    return (
        <div>
            <div>
                <h2>Listado de Pacientes</h2>
                <h6>Administra tus <strong>Pacientes y Citas</strong></h6>
            </div>
            <div className='lista'>
                {paciente.nombre > 1 && paciente.map((paciente, index) => (
                    <div key={index}>
                        <p>{paciente.id}</p>
                        <p>{paciente.nombre}</p>
                        <p>{paciente.propietario}</p>
                        <p>{paciente.email}</p>
                        <p>{paciente.fecha}</p>
                        <p>{paciente.sintomas}</p>
                        <button>EDITAR</button>
                        <button>ELIMINAR</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List
