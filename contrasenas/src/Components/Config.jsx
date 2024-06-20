import React, { useState } from 'react'

const Config = ({ confirmarMinuscula, confirmarMayuscula, confirmarNumero, confirmarSimbolo}) => {
    const [minuscula, setMinuscula] = useState(false)
    const [mayuscula, setMayuscula] = useState(false)
    const [numero, setNumero] = useState(false)
    const [simbolo, setSimbolo] = useState(false)

    const cambiarMinuscula = (e) => {
        setMinuscula(!minuscula)
        confirmarMinuscula(!minuscula)
    }

    const cambiarMayuscula = (e) => {
        setMayuscula(!mayuscula)
        confirmarMayuscula(!mayuscula)
    }

    const cambiarNumero = (e) => {
        setNumero(!numero)
        confirmarNumero(!numero)
    }

    const cambiarSimbolo = (e) => {
        setSimbolo(!simbolo)
        confirmarSimbolo(!simbolo)
    }

    return (
        <div className='config'>
            <p className='titulo'>CONFIGURACIONES:</p>
            <div className='confi'>
                <p>Incluir Minúsculas</p>
                <input type='checkbox' onClick={cambiarMinuscula} value={minuscula}/>
            </div>
            <div className='confi'>
                <p>Incluir Mayúsculas</p>
                <input type='checkbox' onClick={cambiarMayuscula} value={mayuscula}/>
            </div>
            <div className='confi'>
                <p>Incluir Números</p>
                <input type='checkbox' onClick={cambiarNumero} value={numero}/>
            </div>
            <div className='confi'>
                <p>Incluir Simbolos</p>
                <input type='checkbox' onClick={cambiarSimbolo} value={simbolo}/>
            </div>
        </div>
    )
}

export default Config
