import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast.success('Paciente agregado exitosamente',{
            autoClose: 1000
        });
        setNombre('');
        setApellido('');
        setEmail('');
        setFecha('');
        setSintomas('');
    };

    return (
        <div>
            <div>
                <h2>Seguimiento Pacientes</h2>
                <p>Añade Pacientes y <strong>Administralos</strong></p>
            </div>
            <div className='form'>
                <form>
                    <h6>NOMBRE</h6>
                    <input
                        onChange={e => setNombre(e.target.value)}
                        type='text'
                        placeholder='Nombre del Paciente'
                        value={nombre}
                    />
                    <h6>APELLIDO</h6>
                    <input
                        onChange={e => setApellido(e.target.value)}
                        type='text'
                        placeholder='Apellido del Paciente'
                        value={apellido}
                    />
                    <h6>EMAIL</h6>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        type='text'
                        placeholder='Email de Registro'
                        value={email}
                    />
                    <h6>FECHA ALTA</h6>
                    <input
                        onChange={e => setFecha(e.target.value)}
                        type='date'
                        placeholder='Fecha de Alta'
                        value={fecha}
                    />
                    <h6>SÍNTOMAS</h6>
                    <input
                        onChange={e => setSintomas(e.target.value)}
                        type='text'
                        placeholder='Síntomas del Paciente'
                        value={sintomas}
                    />
                </form>
                <button type='button' onClick={agregarPaciente}>GUARDAR CLIENTE</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Form;
