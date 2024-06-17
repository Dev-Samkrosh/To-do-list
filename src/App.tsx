import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaDeTareas from "./components/ListaDeTareas";
import { Tarea } from "./interfaces/interfaces";

export default function App() {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [tarea, setTarea] = useState<Tarea>({
    // Estado para las tareas por individual
    id: "",
    titulo: "",
    descripcion: "",
    fechaDeVencimiento: "",
    estado: false,
  });

  // Función para agregar una nueva tarea a la lista
  const agregarTarea = (nuevaTarea: Tarea) => {
    setTareas((prevTareas) => [...prevTareas, nuevaTarea]);
    // Resetea el estado de la tarea individual después de agregarla a la lista
    setTarea({
      id: "",
      titulo: "",
      descripcion: "",
      fechaDeVencimiento: "",
      estado: false,
    });
  };
  return (
    <>
      {/* Componente #1: Header */}
      <Header></Header>

      {/* Componente #2: Form */}
      <Formulario
        tarea={tarea}
        setTarea={setTarea}
        agregarTarea={agregarTarea}
      ></Formulario>

      {/* Componente #3: Lista de tareas */}
      <ListaDeTareas tareas={tareas}>
        {/* !!! tareas es un State que se toma dinámicamente
        Se debe pasar el prop tareas={tareas} */}
      </ListaDeTareas>
    </>
  );
}
