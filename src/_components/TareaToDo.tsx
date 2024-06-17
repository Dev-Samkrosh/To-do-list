export default function TareaToDo({
  completado,
  id,
  titulo,
  key,
  seleccionarToDo,
  eliminarToDo,
}) {
  return (
    <li key={key}>
      <label>
        <input
          type="checkbox"
          checked={completado}
          onChange={(event) => seleccionarToDo(id, event.target.checked)}
        />
        {titulo}
      </label>
      <button className="boton boton-peligro" onClick={() => eliminarToDo(id)}>
        Eliminar
      </button>
      <button className="boton boton-editar">Editar</button>
      <br></br>
    </li>
  );
}
