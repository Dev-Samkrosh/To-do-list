import Tareas from "./Tareas..component";

export default function ListaDeTareas() {
  return (
    <ul>
      {/* Componente #4: Tareas 
        Comprobamos si existen tareas, en dicho caso, pasamos las propiedades de tareas al componente para renderizar
      */}
      {listaTareas.map((tarea) => (
        <Tareas key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea} />
      ))}
    </ul>
  );
}
