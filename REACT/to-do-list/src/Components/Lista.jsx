import PropTypes from "prop-types";

function Lista({ tareas, setTareas }) {
  function handleEliminar(index) {
    setTareas([...tareas.filter((_, idx) => idx !== index)]);
  }
  return (
    <section>
      <div className="lista">
        {tareas.length > 0 ? (
          tareas.map((tarea, index) => (
            <div key={index}>
              <ul>
                <li>{tarea}</li>{" "}
                <button onClick={() => handleEliminar(index)}>
                  ELIMINAR TAREA
                </button>
              </ul>
            </div>
          ))
        ) : (
          <p>No hay tareas por mostrar</p>
        )}
      </div>
    </section>
  );
}

Lista.propTypes = {
  tareas: PropTypes.array.isRequired,
  setTareas: PropTypes.func.isRequired,
};

export default Lista;
