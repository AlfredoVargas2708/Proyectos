import "./App.css";

function App() {
  let tareas = [{}];
  return (
    <>
      <div className="titulo">
        <h1>Lista de Tareas</h1>
      </div>
      <div className="input">
        <p>Tarea: </p>
        <input type="text" value={tareas.tarea} />
      </div>
    </>
  );
}

export default App;
