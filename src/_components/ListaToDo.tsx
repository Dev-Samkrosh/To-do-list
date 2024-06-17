import TareaToDo from "./TareaToDo";

export default function ListaToDo({ toDos, seleccionarToDo, eliminarToDo }) {
  return (
    <ul className="lista">
      {toDos.length === 0 && "No hay tareas"}
      {toDos.map((toDo: any) => {
        return (
          <TareaToDo
            id={toDo.id}
            completado={toDo.completado}
            titulo={toDo.titulo}
            key={toDo.id}
            seleccionarToDo={seleccionarToDo}
            eliminarToDo={eliminarToDo}
          />
        );
      })}
    </ul>
  );
}
