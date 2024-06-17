import { TareasProps } from "../interfaces/interfaces";

export default function Tareas({ tarea, eliminarTarea }: TareasProps) {
  return (
    <li>
      <input type="checkbox"></input>
      <p>{tarea.titulo}</p>
      <p>{tarea.descripcion}</p>
      <div>
        <p>{tarea.fechaDeVencimiento}</p>
      </div>
      <div>
        <button>
          <span>Editar</span>
        </button>
        <button onClick={() => eliminarTarea(tarea.id)}>
          <span>Eliminar</span>
        </button>
      </div>
    </li>
  );
}
