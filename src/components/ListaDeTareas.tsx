import { ListaDeTareasProps } from "../interfaces/interfaces";
import Tareas from "./Tareas";

export default function ListaDeTareas({
  tareas,
  eliminarTarea,
}: ListaDeTareasProps) {
  return (
    <ul>
      {/* Componente #4: Tareas 
        Comprobamos si existen tareas, en dicho caso, pasamos las propiedades de tareas al componente para renderizar
      */}
      {tareas.map((tarea) => (
        <Tareas key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea} />
      ))}
    </ul>
  );
}
