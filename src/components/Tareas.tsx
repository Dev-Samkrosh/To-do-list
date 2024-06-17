import { Tarea } from "../interfaces/interfaces";

interface TareasProps {
  tarea: Tarea;
}

export default function Tareas({ tarea }: TareasProps) {
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
        <button>
          <span>Eliminar</span>
        </button>
      </div>
    </li>
  );
}
