export interface Tarea {
  id: string;
  titulo: string;
  descripcion: string;
  fechaDeVencimiento: string;
  estado: boolean;
}

export interface TareaFormularioProps {
  tarea: Tarea;
  setTarea: React.Dispatch<React.SetStateAction<Tarea>>;
  agregarTarea: (tarea: Tarea) => void;
}

export interface ListaDeTareasProps {
  tareas: Tarea[];
  eliminarTarea: (id: string) => void;
}

export interface TareasProps {
  tarea: Tarea;
  eliminarTarea: (id: string) => void;
}
