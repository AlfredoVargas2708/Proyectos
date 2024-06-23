import { Fragment } from "react";
import "./App.css";
import Titulo from "./Titulo";
import NuevaTarea from "./Components/Nueva";
import Lista from "./Components/Lista";

function App() {
  return (
    <Fragment>
      <div className="titulo">
        <Titulo />
      </div>
      <div className="contenido">
        <div className="agregar">
          <NuevaTarea />
        </div>
        <Lista />
      </div>
    </Fragment>
  );
}

export default App;
