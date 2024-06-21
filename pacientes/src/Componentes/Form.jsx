import React, { useState } from 'react';

const Form = ({ setPacientes }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const agregarPaciente = () => {
        setPacientes(prevState => [
            ...prevState,
            {
                nombre: nombre,
                apellido: apellido,
                email: email,
                fecha: fecha,
                sintomas: sintomas
            }
        ]);
    };

    return (
        <div>
            <div>
                <h2>Seguimiento Pacientes</h2>
                <h6>Añade Pacientes y <strong>Administralos</strong></h6>
            </div>
            <div className='form'>
                <form>
                    <h6>NOMBRE</h6>
                    <input
                        onChange={e => setNombre(e.target.value)}
                        type='text'
                        placeholder='Nombre del Paciente'
                    />
                    <h6>APELLIDO</h6>
                    <input
                        onChange={e => setApellido(e.target.value)}
                        type='text'
                        placeholder='Apellido del Paciente'
                    />
                    <h6>EMAIL</h6>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        type='text'
                        placeholder='Email de Registro'
                    />
                    <h6>FECHA ALTA</h6>
                    <input
                        onChange={e => setFecha(e.target.value)}
                        type='date'
                        placeholder='Fecha de Alta'
                    />
                    <h6>SÍNTOMAS</h6>
                    <input
                        onChange={e => setSintomas(e.target.value)}
                        type='text'
                        placeholder='Síntomas del Paciente'
                    />
                </form>
                <button type='button' onClick={agregarPaciente}>GUARDAR CLIENTE</button>
            </div>
        </div>
    );
};

export default Form;
