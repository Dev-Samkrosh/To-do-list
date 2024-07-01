import { agregarTarea } from "../../services/crud/Tareas.services";

// ! Entidad de negocio
export interface ITarea {
  id: string;
  titulo: string;
  descripcion: string;
  fechaDeVencimiento: string;
  estado: boolean;
}

// ! Tipos atómicos

export interface agregarTarea {
  agregarTarea: (tarea: ITarea) => void;
}

export interface eliminarTarea {
  eliminarTarea: (id: string) => void;
}

// ! Interfaces compuestas (Estas corresponden a Props que se pretenden deprecar con useContext)

// export interface TareaFormularioProps {
//   tarea: ITarea;
//   setTarea: React.Dispatch<React.SetStateAction<ITarea>>;
//   agregarTarea: agregarTarea;
// }

// export interface ListaDeTareasProps {
//   tareas: ITarea[];
//   eliminarTarea: eliminarTarea;
// }

// export interface TareasProps {
//   tarea: ITarea;
//   eliminarTarea: eliminarTarea;
// }

// ! Interfaces de context

export interface TareaContextType {
  tarea: ITarea;
  setTarea: React.Dispatch<React.SetStateAction<ITarea>>;

  tareas: ITarea[];
  setTareas: React.Dispatch<React.SetStateAction<ITarea[]>>;

  mostrarFormulario: boolean;
  setMostrarFormulario: React.Dispatch<React.SetStateAction<boolean>>;
}
