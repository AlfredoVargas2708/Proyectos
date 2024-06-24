import Editar from "./Editar";
import "../App.css";
import PropTypes from "prop-types";
import { useState } from "react";

function Lista({ tareas, setTareas, isOpen, setIsOpen }) {
  const [completado, setCompletado] = useState(false);
  function handleEliminar(index) {
    setTareas([...tareas.filter((_, idx) => idx !== index)]);
    setCompletado(!completado);
  }
  function handleEditar() {
    setIsOpen(!isOpen);
  }

  function handleCompletar() {
    setCompletado(!completado);
  }

  return (
    <main>
      <section className={completado ? "completada" : ""}>
        <div className="lista">
          {tareas.length > 0 ? (
            tareas.map((tarea, index) => (
              <div key={index}>
                <div>
                  <ul>
                    <li>{tarea}</li>{" "}
                    <button
                      className="eliminar"
                      onClick={() => handleEliminar(index)}
                    >
                      ELIMINAR TAREA
                    </button>
                    <button className="editar" onClick={() => handleEditar()}>
                      EDITAR TAREA
                    </button>
                    <button
                      className="completar"
                      onClick={() => handleCompletar()}
                    >
                      {completado ? "TAREA COMPLETADA" : "COMPLETAR TAREA"}
                    </button>
                  </ul>
                </div>
                <Editar
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  index={index}
                  tareas={tareas}
                  setTareas={setTareas}
                />
              </div>
            ))
          ) : (
            <p>No hay tareas por mostrar</p>
          )}
        </div>
      </section>
    </main>
  );
}

Lista.propTypes = {
  tareas: PropTypes.array.isRequired,
  setTareas: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Lista;
