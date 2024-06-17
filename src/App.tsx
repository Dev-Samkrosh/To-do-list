import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaDeTareas from "./components/ListaDeTareas";

export default function App() {
  return (
    <>
      {/* Componente #1: Header */}
      <Header></Header>

      {/* Componente #2: Form */}
      <Formulario></Formulario>

      {/* Componente #3: Lista de tareas */}
      <ListaDeTareas>
        {/* !!! tareas es un State que se toma dinámicamente
        Se debe pasar el prop tareas={tareas} */}
      </ListaDeTareas>
    </>
  );
}
