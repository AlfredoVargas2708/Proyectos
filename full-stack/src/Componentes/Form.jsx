import React, { useState } from 'react'

const Form = () => {
    const [isSelectedMas, setIsSelectedMas] = useState(false)
    const [isSelectedFem, setIsSelectedFem] = useState(false)
    const [nombre, setNombre] = useState('')
    const [cedula, setCedula] = useState('')
    const [edad, setEdad] = useState([])
    const [sexo, setSexo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [cargo, setCargo] = useState('')
    const [foto, setFoto] = useState('')
    const [edades, setEdades] = useState(Array.from({ length: 100 }, (_, i) => i + 1));

    const handleSelected = (e) => {
        if(e.target.className === 'noSeleccionado'){
            e.target.className = 'seleccionado'
            if (e.target.parentNode.innerText === 'Masculino'){
                setIsSelectedMas(!isSelectedMas)
                setSexo('Masculino')
            }
            else{
                setIsSelectedFem(!isSelectedFem)
                setSexo('Femenino')
            }
        }else {
            e.target.className = 'noSeleccionado'
            if (e.target.parentNode.innerText === 'Masculino') {
                setIsSelectedMas(!isSelectedMas)
                setSexo('')
            }
            else {
                setIsSelectedFem(!isSelectedFem)
                setSexo('')
            }
        }
    }

    const handleClick = () => {
        console.log(edad)
    }

    return (
        <div>
            <form className='formulario'>
                <p>Nombre</p>
                <input type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <p>Cédula (RUT)</p>
                <input type='number' value={cedula} onChange={(e) => setCedula(e.target.value)} />
                <div className='edad-sexo'>
                    <div className='edad'>
                        <p className='edad'>Seleccione la edad</p>
                        <select value={edad} onChange={(e) => setEdad(e.target.value)}>
                            <option value=''>Seleccione</option>
                            {edades.map((age) => (
                                <option key={age} value={age}>
                                    {age}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='sexo'>
                        <p className='sexo'>Sexo del alumno</p>
                        <div className='select'>
                            <span
                                onClick={handleSelected}
                                className={isSelectedMas ? 'seleccionado' : 'noSeleccionado'}></span>
                            <p>Masculino</p>
                        </div>
                        <div className='select'>
                            <span
                                onClick={handleSelected}
                                className={isSelectedFem ? 'seleccionado' : 'noSeleccionado'}></span>
                            <p>Femenino</p>
                        </div>
                    </div>
                </div>
                <p>Teléfono</p>
                <input type='number' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                <p>Seleccione el Cargo</p>
                <select value={cargo} onChange={(e) => setCargo(e.target.value)}></select>
                <p>Cambiar Foto del empleado</p>
                <input type='file' value={foto} onChange={(e) => setFoto(e.target.value)} />
            </form>
            <button className='boton-actualizar' onClick={handleClick}>Actualizar Empleado</button>
        </div>
    )
}

export default Form
