import { useState } from "react";
import "./App.css";
import Nueva from "./Componentes/Nueva";

function App() {
  const [nueva, setNueva] = useState(false);
  const [nota, setNota] = useState("");
  const [notas, setNotas] = useState([]);
  const [select, setSelect] = useState(false);

  function nuevaNota() {
    setNueva(!nueva);
  }

  function seleccionar() {
    setSelect(!select);
  }
  return (
    <>
      <header>
        <h1> Notas </h1>
      </header>
      <main>
        <button className="nueva" onClick={nuevaNota} />
        <input type="checkbox" onClick={seleccionar} />
        {nueva && (
          <Nueva
            nota={nota}
            setNota={setNota}
            notas={notas}
            setNotas={setNotas}
            nueva={nueva}
            setNueva={setNueva}
          />
        )}
        {notas.length > 0 ? (
          select ? (
            <div className="select"> {nota} seleccionada </div>
          ) : (
            <div className="select"> {nota} </div>
          )
        ) : (
          <p> No Hay Notas Guardadas </p>
        )}
      </main>
    </>
  );
}

export default App;
