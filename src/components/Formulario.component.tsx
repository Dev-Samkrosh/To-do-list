import { Tarea, TareaFormularioProps } from "../domain/interfaces/interfaces";

export default function Formulario({
  tarea,
  setTarea,
  agregarTarea,
}: TareaFormularioProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Reseteamos el formulario

    agregarTarea({ ...tarea, id: crypto.randomUUID() });
    const formulario = event.target as HTMLFormElement;
    formulario.reset();
  };

  // Función para manejar los cambios en cualquier input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTarea((prevTarea: Tarea) => ({
      ...prevTarea,
      [name]: value,
    }));
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      {" "}
      {/* !!! Falta un handler para evitar que se borre */}
      <label htmlFor="formulario">
        <input
          type="text"
          name="titulo"
          id="titulo"
          value={tarea.titulo}
          onChange={handleInputChange}
          placeholder="Escribe tu próxima tarea"
        ></input>
        <input
          type="textarea"
          name="descripcion"
          id="descripcion"
          value={tarea.descripcion}
          onChange={handleInputChange}
          placeholder="Descripción"
        ></input>
        <input
          type="date"
          name="fechaDeVencimiento"
          id="fechaVencimiento"
          value={tarea.fechaDeVencimiento}
          onChange={handleInputChange}
          placeholder="Fecha de vencimiento"
        ></input>
      </label>
      <button>
        <span>
          {/* !!! Debe esconderse, se pone por accesibilidad además de añadir un ícono bonito*/}
          Añadir
        </span>
      </button>
    </form>
  );
}
