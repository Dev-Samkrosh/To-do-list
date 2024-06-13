import { ChangeEvent, SyntheticEvent, useState } from "react";

export default function App() {
  const [newTarea, setNewTarea] = useState<string>("");
  const [toDos, setToDos] = useState<any>([]); // Hay que definir bien el tipo

  // handleSubmit hace que al enviar los datos del form y actualizarse la página, no se pierdan los datos del input
  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    setToDos((actualToDo: string) => {
      return [
        ...actualToDo,
        {
          id: crypto.randomUUID(),
          titulo: newTarea,
          completado: FontFaceSetLoadEvent,
        },
      ];
    });

    setNewTarea("");
  }

  function seleccionarToDo(id: string, completado: boolean) {
    setToDos((actualToDo: any) => {
      // Viene a ser un array
      return actualToDo.map((toDo: any) => {
        if (toDo.id === id) {
          return { ...toDo, completado };
        }
        return toDo;
      });
    });
  }

  console.log(toDos);

  return (
    // Formulario para añadir tareas nuevas
    <>
      <form onSubmit={handleSubmit} className="formulario-tarea">
        <div className="fila-tarea">
          <label htmlFor="tarea">Añadir nueva tarea</label>
          <input
            value={newTarea}
            onChange={(event) => setNewTarea(event.target.value)}
            type="text"
            id="tarea"
          />
        </div>
        <button className="boton">Añadir</button>
      </form>

      <h1 className="header">To-do</h1>

      <ul className="lista">
        {toDos.map((toDo: any) => {
          return (
            <li key={toDo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={toDos.completado}
                  onChange={(event) =>
                    seleccionarToDo(toDo.id, event.target.checked)
                  }
                />
                {toDo.titulo}
              </label>
              <button className="boton boton-peligro">Eliminar</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
