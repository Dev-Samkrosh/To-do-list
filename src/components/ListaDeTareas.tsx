import Tareas from "./Tareas";
import { TareasProps } from "./Tareas";

export interface ListaDeTareasProps {
  tareas: Array<TareasProps>;
}

export default function ListaDeTareas({ tareas }: ListaDeTareasProps) {
  return (
    <ol>
      {/* Componente #4: Tareas 
        Comprobamos si existen tareas, en dicho caso, pasamos las propiedades de tareas al componente para renderizar
      */}
      {tareas && tareas.length > 0 ? (
        tareas?.map(
          ({
            titulo,
            descripcion,
            fechaDeVencimiento,
            estado,
            id,
          }: TareasProps) => (
            <Tareas
              id={id}
              titulo={titulo}
              descripcion={descripcion}
              fechaDeVencimiento={fechaDeVencimiento}
              estado={estado}
            />
          )
        )
      ) : (
        <p>No tienes tareas </p>
      )}
    </ol>
  );
}
