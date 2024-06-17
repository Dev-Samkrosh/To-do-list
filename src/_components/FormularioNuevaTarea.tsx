import { SyntheticEvent, useState } from "react";

export default function FormularioNuevaTarea({ onSubmit }) {
  const [newTarea, setNewTarea] = useState<string>("");
  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    if (newTarea === "") return;
    onSubmit(newTarea);

    setNewTarea("");
  }

  return (
    <form onSubmit={handleSubmit} className="formulario-tarea">
      <div className="fila-tarea">
        <label htmlFor="tarea">Añadir nueva tarea</label>
        <input
          autoComplete="off"
          value={newTarea}
          onChange={(event) => setNewTarea(event.target.value)}
          type="text"
          id="tarea"
        />
      </div>
      <button className="boton">Añadir</button>
    </form>
  );
}
