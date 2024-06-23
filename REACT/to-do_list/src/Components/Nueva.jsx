import { Fragment } from "react";
import "../App.css";

function NuevaTarea() {
  const tarea = {};
  return (
    <Fragment>
      <h4>Agregar Nueva Tarea:</h4>
      <div className="inputs">
        <label>
          Tarea:{" "}
          <input
            type="text"
            placeholder="Ingrese la Tarea"
            value={tarea.texto}
          />
        </label>
        <label>
          Fecha de Inicio: <input type="date" value={tarea.inicio} />
        </label>
        <label>
          Fecha de Termino: <input type="date" value={tarea.termino} />
        </label>
      </div>
      <div className="btn-tarea">
        <button>Agregar Tarea</button>
      </div>
    </Fragment>
  );
}

export default NuevaTarea;
