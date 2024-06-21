import React, { useState } from 'react';
import Modal from 'react-modal';

const List = ({ pacientes }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [selectedPaciente, setSelectedPaciente] = useState([])

    function openModal(paciente) {
        setSelectedPaciente(paciente)
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

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
                        <button id='editar' onClick={() => openModal(paciente)}>EDITAR</button>
                        <button id='eliminar'>ELIMINAR</button>
                    </div>
                </div>
            ))}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className='modal'
            >
                <h2>EDITAR PACIENTE</h2>
                <div className='inputs'>
                    <form>
                        <p>NOMBRE:</p>
                        <input
                            type='text'
                            value={selectedPaciente.nombre}
                        />
                        <p>APELLIDO:</p>
                        <input
                            type='text'
                            value={selectedPaciente.apellido}
                        />
                        <p>EMAIL:</p>
                        <input
                            type='text'
                            value={selectedPaciente.email}
                        />
                        <p>FECHA ALTA:</p>
                        <input
                            type='date'
                            value={selectedPaciente.fecha}
                        />
                        <p>SÍNTOMAS:</p>
                        <input
                            type='text'
                            value={selectedPaciente.sintomas}
                        />
                    </form>
                </div>
                <button onClick={closeModal}>close</button>
            </Modal>
        </div>
    );
};

export default List;
