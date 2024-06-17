// import { useState } from "react";
// import FormularioNuevaTarea from "./components/FormularioNuevaTarea";
// import ListaToDo from "./components/ListaToDo";

// export default function App() {
// const [toDos, setToDos] = useState<any>([]);

// function anadirToDo(titulo: string) {
//   setToDos((actualToDo: string) => {
//     return [
//       ...actualToDo,
//       {
//         id: crypto.randomUUID(),
//         titulo,
//         completado: false,
//       },
//     ];
//   });
// }

// function seleccionarToDo(ToDo, completado) {
//   setToDos((actualToDo) => {
//     return actualToDo.map((toDo) => {
//       if (toDo.id === id) {
//         return { ...toDo, completado };
//       }
//       return toDo;
//     });
//   });
// }

// function eliminarToDo(id) {
//   setToDos((actualToDo) => {
//     return actualToDo.filter((toDo) => toDo.id !== id);
//   });
// }

// console.log(toDos);

//   return (
//     <>
//       <h1 className="header">To-do List</h1>
//       <br></br>
//       <ListaToDo
// toDos={toDos}
// seleccionarToDo={seleccionarToDo}
// eliminarToDo={eliminarToDo}
//       />
//       <br></br>
//       <FormularioNuevaTarea onSubmit={anadirToDo} />
//     </>
//   );
// }

export default function App() {
  return (
    <>
      {/* Componente #1: Header */}
      <header>
        <svg>
          <path d=""></path>
        </svg>
        <h1>Lista de tareas</h1>
      </header>

      {/* Componente #2: Form */}
      <form className="formulario">
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

      {/* Componente #3: Lista de tareas */}
      <ol>
        {/* Componente #4: Tareas */}
        <li id="">
          {/* !!! ID único requerido por ser hijo creado dinámicamente */}
          <input type="checkbox"></input>
          <p>{/* !!! Tarea aqui */} Tarea</p>
          <div>
            <p>{/* !!! Fecha aqui */}Fecha</p>
          </div>
          <div>
            {/* !!! Botones aqui */}
            <button>
              <span>
                {/* !!! Debe esconderse, se pone por accesibilidad */}Editar
              </span>
              <svg>
                <path d=""></path>
              </svg>
            </button>
            <button>
              <span>
                {/* !!! Debe esconderse, se pone por accesibilidad */}Eliminar
              </span>
              <svg>
                <path d=""></path>
              </svg>
            </button>
          </div>
        </li>
      </ol>
    </>
  );
}
