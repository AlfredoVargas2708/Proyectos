import { useState } from "react";
import PropTypes from "prop-types";

function Editar({ isOpen, setIsOpen, index, tareas, setTareas }) {
  const [nuevaTarea, setNuevaTarea] = useState("");
  function cambiarTarea() {
    const updatedTareas = tareas.map((task, idx) => {
      if (index === idx) {
        return nuevaTarea;
      } else {
        return task;
      }
    });
    setTareas(updatedTareas);
    setNuevaTarea("");
    setIsOpen(!isOpen);
  }

  return (
    <div className="editar">
      {isOpen && (
        <div>
          <p>
            Cambiar Tarea:{" "}
            <input
              type="text"
              value={nuevaTarea}
              onChange={(e) => setNuevaTarea(e.target.value)}
            />
            <button onClick={cambiarTarea}> CAMBIAR TAREA </button>
          </p>
        </div>
      )}
    </div>
  );
}

Editar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  tareas: PropTypes.array.isRequired,
  setTareas: PropTypes.func.isRequired,
};

export default Editar;
