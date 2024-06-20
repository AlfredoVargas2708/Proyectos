import React, { useState } from 'react';
import Contrasena from './Components/Contraseña';
import './App.css';
import Longitud from './Components/Longitud';
import Config from './Components/Config';

function App() {
  const [largoclave, setLargoClave] = useState(0);
  const [minuscula, setMinuscula] = useState(false)
  const [mayuscula, setMayuscula] = useState(false)
  const [numero, setNumero] = useState(false)
  const [simbolo, setSimbolo] = useState(false)
  let [clave, setClave] = useState('')
  let minusculas = 'abcdefghijklmnopqrstuvwxyz'
  let mayusculas = minusculas.toUpperCase()
  let numeros = '0123456789'
  let simbolos = '!@#$%^&*()'
  let caracteres = ''

  const longitudClave = (largo) => {
    setLargoClave(largo);
  };

  const confirmarMinuscula = (minuscula) => {
    setMinuscula(minuscula);
  };

  const confirmarMayuscula = (mayuscula) => {
    setMayuscula(mayuscula);
  };

  const confirmarNumero = (numero) => {
    setNumero(numero);
  };

  const confirmarSimbolo = (simbolo) => {
    setSimbolo(simbolo);
  };

  const limpiar = () => {
    setClave('')
    setLargoClave(0)
  }

  const crear = () => {
    caracteres = ''; // Resetear la cadena de caracteres
    let caracteresDisponibles = '';
    if (minuscula) {
      caracteresDisponibles += minusculas;
    }
    if (mayuscula) {
      caracteresDisponibles += mayusculas;
    }
    if (numero) {
      caracteresDisponibles += numeros;
    }
    if (simbolo) {
      caracteresDisponibles += simbolos;
    }

    if (caracteresDisponibles.length === 0) {
      setClave('');
      return;
    }

    for (let i = 0; i < largoclave; i++) {
      const randomIndex = Math.floor(Math.random() * caracteresDisponibles.length);
      caracteres += caracteresDisponibles[randomIndex];
    }

    setClave(caracteres);
  }

  return (
    <div className='app'>
      <div className='generador'>
        <Contrasena
          crear={clave} />
        <div className='longitud'>
          <Longitud
            longitudClave={longitudClave} />
        </div>
        <Config
          confirmarMinuscula={confirmarMinuscula}
          confirmarMayuscula={confirmarMayuscula}
          confirmarNumero={confirmarNumero}
          confirmarSimbolo={confirmarSimbolo}
        />
        <div className='btns'>
          <button className='btn-contrasena' onClick={crear}> Crear Contraseña </button>
          <button className='btn-contrasena' onClick={limpiar}> Limpiar </button>
        </div>
      </div>
    </div>
  );
}

export default App;
