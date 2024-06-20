import React from 'react'
import '../App.css'
import copiar from '../assets/copia.png'

function Contrasena({ crear }) {
    const copiarAlPortapapeles = () => {
        if (crear) {
            navigator.clipboard.writeText(crear)
        }
    };

    return (
        <div>
            Generador de contraseñas
            <div className='texto'>
                <p>{crear}</p>
                <img
                    src={copiar}
                    alt='copiar'
                    onClick={copiarAlPortapapeles}
                    style={{ cursor: 'pointer' }}
                />
            </div>
        </div>
    )
}

export default Contrasena
