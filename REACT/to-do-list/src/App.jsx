import { useState } from "react";
import "./App.css";

function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  function handleClick() {
    setTareas([...tareas, tarea]);
    setTarea("");
  }

  function handleEliminar(index) {
    setTareas([...tareas.filter((_, idx) => idx !== index)]);
  }

  return (
    <>
      <div className="titulo">
        <h1> Lista de Tareas: </h1>
      </div>
      <header>
        <p>
          Nueva Tarea:{" "}
          <input
            type="text"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />{" "}
          <button onClick={handleClick}> AGREGAR </button>
        </p>
      </header>
      <section>
        <div className="lista">
          {tareas.length > 0 ? (
            tareas.map((tarea, index) => (
              <div key={index}>
                <ul>
                  <li style={{ listStyleType: "square" }}>{tarea}</li>{" "}
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
    </>
  );
}

export default App;
