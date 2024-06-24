import Editar from "./Editar";
import "../App.css";
import PropTypes from "prop-types";

function Lista({ tareas, setTareas, isOpen, setIsOpen }) {
  function handleEliminar(index) {
    setTareas([...tareas.filter((_, idx) => idx !== index)]);
  }
  function handleEditar() {
    setIsOpen(!isOpen);
  }

  return (
    <main>
      <section>
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
                    <button className="completar">COMPLETAR TAREA</button>
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
