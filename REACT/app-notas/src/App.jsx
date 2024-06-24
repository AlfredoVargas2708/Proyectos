import { useState } from "react";
import "./App.css";

function App() {
  const [nueva, setNueva] = useState(false);
  const [nota, setNota] = useState("");
  const [notas, setNotas] = useState([]);

  function nuevaNota() {
    setNueva(!nueva);
  }

  function guardarNota() {
    setNotas([...notas, nota]);
    setNueva(!nueva);
  }
  return (
    <>
      <header>
        <h1> Notas </h1>
      </header>
      <main>
        <button className="nueva" onClick={nuevaNota} />
        {nueva && (
          <section>
            <textarea
              rows="15"
              cols="50"
              placeholder="Nueva Nota"
              value={nota}
              onChange={(e) => setNota(e.target.value)}
            ></textarea>
            <button className="guardar" onClick={guardarNota}>
              {" "}
              GUARDAR NOTA{" "}
            </button>
          </section>
        )}
        {notas}
      </main>
    </>
  );
}

export default App;
