import React from 'react';

const List = ({ pacientes }) => {
    return (
        <div>
            <div>
                <h2>Listado de Pacientes</h2>
                <h6>Administra tus <strong>Pacientes y Citas</strong></h6>
            </div>
            {pacientes.map((paciente, index) => (
                <div key={index} className='lista'>
                    <p><b>NOMBRE:</b> {paciente.nombre}</p>
                    <p><b>APELLIDO:</b> {paciente.apellido}</p>
                    <p><b>EMAIL:</b> {paciente.email}</p>
                    <p><b>FECHA:</b> {paciente.fecha}</p>
                    <p><b>SÍNTOMAS:</b> {paciente.sintomas}</p>
                    <div className='botones'>
                        <button id='editar'>EDITAR</button>
                        <button id='eliminar'>ELIMINAR</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default List;
