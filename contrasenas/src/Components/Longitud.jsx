import React from 'react';
import '../App.css';

const Longitud = ({ longitudClave }) => {
    const [longitud, setLongitud] = React.useState(0);

    const min = 0;
    const max = 32;

    const handleLongitudChange = (event) => {
        const value = parseInt(event.target.value);
        setLongitud(value);
        longitudClave(value);
    };

    return (
        <>
            <p>LONGITUD: {longitud}</p>
            <div className='rango'>
                <p>{min}</p>
                <input
                    type='range'
                    value={longitud}
                    onChange={handleLongitudChange}
                    min={min}
                    max={max}
                />
                <p>{max}</p>
            </div>
        </>
    );
}

export default Longitud;
