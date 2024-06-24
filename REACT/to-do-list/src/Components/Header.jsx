import PropTypes from "prop-types";

function Header({ tarea, setTarea, tareas, setTareas }) {
  function handleClick() {
    if (tarea.trim() !== "") {
      setTareas([...tareas, tarea]);
      setTarea("");
    }
  }
  return (
    <header>
      <p>
        Nueva Tarea:{" "}
        <input
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />{" "}
        <button onClick={handleClick}>AGREGAR</button>
      </p>
    </header>
  );
}

Header.propTypes = {
  tarea: PropTypes.string.isRequired,
  tareas: PropTypes.array.isRequired,
  setTareas: PropTypes.func.isRequired,
  setTarea: PropTypes.func.isRequired,
};

export default Header;
