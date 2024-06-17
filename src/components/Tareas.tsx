export interface TareasProps {
  titulo: string;
  descripcion: string;
  fechaDeVencimiento: string;
  id: number;
  estado: boolean;
}

export default function Tareas({
  titulo,
  descripcion,
  fechaDeVencimiento,
  id,
  estado,
}: TareasProps) {
  return (
    <li id="">
      {/* !!! ID único requerido por ser hijo creado dinámicamente */}
      <input type="checkbox"></input>
      <p>{/* !!! Tarea aqui */} titulo</p>
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
  );
}
