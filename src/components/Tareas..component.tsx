import { TareasProps } from "../domain/interfaces/interfaces";

export default function Tareas({ tarea, eliminarTarea }: TareasProps) {
  return (
    <li>
      <input type="checkbox"></input>
      <div>
        <p>{tarea.titulo}</p>
        <p>{tarea.descripcion}</p>
        <p>{tarea.fechaDeVencimiento}</p>
      </div>
      <div>
        <button>
          <span>Editar</span>
        </button>
        <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
      </div>
    </li>
  );
}
