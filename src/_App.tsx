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
