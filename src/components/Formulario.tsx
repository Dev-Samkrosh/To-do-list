export default function Formulario() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Reseteamos el formulario
    const formulario = event.target as HTMLFormElement;
    formulario.reset();
  };
  return (
    <form className="formulario" onSubmit={handleSubmit}>
      {" "}
      {/* !!! Falta un handler para evitar que se borre */}
      <label htmlFor="formulario">
        <input
          type="text"
          name="tarea"
          id="tarea"
          placeholder="Escribe tu próxima tarea"
        ></input>
      </label>
      <button>
        <span>
          {/* !!! Debe esconderse, se pone por accesibilidad */}Añadir
        </span>{" "}
        <svg>
          <path d=""></path>
        </svg>
      </button>
    </form>
  );
}
