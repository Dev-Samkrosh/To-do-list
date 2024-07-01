import { ITarea } from "../../domain/interfaces/interfaces";

export const agregarTarea = (
  setTarea: Function,
  setTareas: Function,
  nuevaTarea: ITarea
) => {
  setTareas((prevTareas: Array<ITarea>) => [...prevTareas, nuevaTarea]);
  // Resetea el estado de la tarea individual después de agregarla a la lista
  setTarea({
    id: "",
    titulo: "",
    descripcion: "",
    fechaDeVencimiento: "",
    estado: false,
  });
};

export const eliminarTarea = (setTareas: Function, id: string) => {
  setTareas((prevTareas: Array<ITarea>) =>
    prevTareas.filter((tarea) => tarea.id !== id)
  );
};
