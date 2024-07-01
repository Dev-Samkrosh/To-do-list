import Formulario from "../components/Formulario.component";
import Header from "../components/Header.component";
import ListaDeTareas from "../components/ListaDeTareas.component";

export default function TareasPage() {
  return (
    <div>
      {/* Componente #1: Header */}
      <Header></Header>

      {/* Componente #2: Form */}
      {/* Botón para mostrar el formulario */}
      <button onClick={() => setMostrarFormulario(!mostrarFormulario)}>
        +
      </button>
      {mostrarFormulario && (
        <Formulario
          tarea={tarea}
          setTarea={setTarea}
          agregarTarea={agregarTarea}
        ></Formulario>
      )}

      {/* Componente #3: Lista de tareas */}
      <ListaDeTareas
        tareas={tareas}
        eliminarTarea={eliminarTarea}
      ></ListaDeTareas>
    </div>
  );
}
