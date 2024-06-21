import React, { useRef, useState } from 'react'

const Form = () => {
    const [isSelectedMas, setIsSelectedMas] = useState(false)
    const [isSelectedFem, setIsSelectedFem] = useState(false)


    const handleSelected = (e) => {
        if(e.target.className === 'noSeleccionado'){
            e.target.className = 'seleccionado'
            if (e.target.parentNode.innerText === 'Masculino'){
                setIsSelectedMas(!isSelectedMas)
            }
            else{
                setIsSelectedFem(!isSelectedFem)
            }
        }else {
            e.target.className = 'noSeleccionado'
            if (e.target.parentNode.innerText === 'Masculino') {
                setIsSelectedMas(!isSelectedMas)
            }
            else {
                setIsSelectedFem(!isSelectedFem)
            }
        }
    }
    return (
        <div>
            <form className='formulario'>
                <p>Nombre</p>
                <input type='text' />
                <p>Cédula (RUT)</p>
                <input type='text' />
                <div className='edad-sexo'>
                    <div className='edad'>
                        <p className='edad'>Seleccione la edad</p>
                        <select>
                            <option>Seleccione la edad</option>
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
                <input type='number'/>
                <p>Seleccione el Cargo</p>
                <select></select>
                <p>Cambiar Foto del empleado</p>
                <input type='file'/>
            </form>
        </div>
    )
}

export default Form
