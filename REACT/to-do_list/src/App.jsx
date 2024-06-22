import { Fragment } from "react";
import "./App.css";
import Titulo from "./Titulo";
import NuevaTarea from "./Components/Nueva";

function App() {
  return (
    <Fragment>
      <Titulo />
      <NuevaTarea />
    </Fragment>
  );
}

export default App;
