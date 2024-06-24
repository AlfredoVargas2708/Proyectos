import { useState } from "react";
import "./App.css";
import Lista from "./Components/Lista";
import Header from "./Components/Header";

function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  return (
    <>
      <div className="titulo">
        <h1>Lista de Tareas:</h1>
      </div>
      <Header
        setTarea={setTarea}
        tarea={tarea}
        tareas={tareas}
        setTareas={setTareas}
      />
      <Lista tareas={tareas} setTareas={setTareas} />
    </>
  );
}

export default App;
