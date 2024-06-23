import "../App.css";

function Lista() {
  return (
    <div className="tarea">
      <table>
        <thead>
          <th>Tarea</th>
          <th>Fecha de Inicio</th>
          <th>Fecha de Finalización</th>
          <th>Acciones</th>
        </thead>
        <tbody>
          <td>Tarea</td>
          <td>Fecha de Inicio</td>
          <td>Fecha de Finalización</td>
          <td className="acciones">
            <label className="complete">
              Completada <input type="checkbox" />
            </label>
            <label className="pending">
              Pendiente <input type="checkbox" />
            </label>
          </td>
        </tbody>
      </table>
    </div>
  );
}

export default Lista;
