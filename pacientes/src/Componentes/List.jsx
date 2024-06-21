import React, { useState } from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = ({ pacientes, setPacientes}) => {
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [currentPaciente, setCurrentPaciente] = useState([]);

    const handleElminar = (index) => {
        pacientes = pacientes.filter((_,i) => i !== index)
        setPacientes(pacientes)
    }

    const handleEditar = (index) => {
        setCurrentPaciente({ ...pacientes[index], index });
        setEditModalIsOpen(true);
    };

    const handleSave = () => {
        const nuevosPacientes = pacientes.map((paciente, index) =>
            index === currentPaciente.index ? currentPaciente : paciente
        );
        setPacientes(nuevosPacientes);
        setEditModalIsOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentPaciente({ ...currentPaciente, [name]: value });
    };

    return (
        <div>
            <div>
                <h2>Listado de Pacientes</h2>
                <h6>Administra tus <strong>Pacientes y Citas</strong></h6>
            </div>
            {pacientes.map((paciente, index) => (
                <div key={index} className='lista'>
                    <p><b>NOMBRE:</b> {paciente.nombre}</p>
                    <p><b>PROPIETARIO:</b> {paciente.propietario}</p>
                    <p><b>EMAIL:</b> {paciente.email}</p>
                    <p><b>FECHA:</b> {paciente.fecha}</p>
                    <p><b>SÍNTOMAS:</b> {paciente.sintomas}</p>
                    <div className='botones'>
                        <button id='editar' onClick={() => handleEditar(index)}>EDITAR</button>
                        <button id='eliminar' onClick={() => handleElminar(index)}>ELIMINAR</button>
                    </div>
                </div>
            ))}
            {<Modal isOpen={editModalIsOpen} onRequestClose={() => setEditModalIsOpen(false)} className='modal'>
                <h2>Editar Paciente</h2>
                <form className='form-edicion'>
                    <p>
                        NOMBRE:
                        <input type="text" name="nombre" value={currentPaciente.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        PROPIETARIO:
                        <input type="text" name="propietario" value={currentPaciente.propietario} onChange={handleChange} />
                    </p>
                    <p>
                        EMAIL:
                        <input type="email" name="email" value={currentPaciente.email} onChange={handleChange} />
                    </p>
                    <p>
                        FECHA ALTA:
                        <input type="date" name="fecha" value={currentPaciente.fecha} onChange={handleChange} />
                    </p>
                    <p>
                        SÍNTOMAS:
                        <input name="sintomas" value={currentPaciente.sintomas} onChange={handleChange}></input>
                    </p>
                </form>
                <div className='botones'>
                    <button className='guardar' type="button" onClick={handleSave}>Guardar</button>
                    <button className='cancelar' type="button" onClick={() => setEditModalIsOpen(false)}>Cancelar</button>
                </div>
            </Modal>}
        </div>
    );
};

export default List;
