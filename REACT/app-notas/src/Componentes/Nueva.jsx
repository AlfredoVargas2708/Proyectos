import PropTypes from "prop-types";

function Nueva({ nota, setNota, notas, setNotas, nueva, setNueva }) {
  function guardarNota() {
    setNotas([...notas, nota]);
    setNueva(!nueva);
  }
  return (
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
  );
}

Nueva.propTypes = {
  nota: PropTypes.string.isRequired,
  setNota: PropTypes.func.isRequired,
  notas: PropTypes.string.isRequired,
  setNotas: PropTypes.func.isRequired,
  nueva: PropTypes.bool.isRequired,
  setNueva: PropTypes.func.isRequired,
};

export default Nueva;
