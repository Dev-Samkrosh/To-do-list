import { useState } from "react";
import { ITarea } from "../domain/interfaces/interfaces";
import TareasPage from "../pages/Tareas.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContext } from "../context/Tareas.context";
import LogInPage from "../pages/LogIn.page";
import SignUpPage from "../pages/SignUp.page";

export default function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false); //!! Hay que trasladar estos states
  const [listaTareas, setListaTareas] = useState<ITarea[]>([]);
  const [tarea, setTarea] = useState<ITarea>({
    // Estado para las tareas por individual
    id: "",
    titulo: "",
    descripcion: "",
    fechaDeVencimiento: "",
    estado: false,
  });

  return (
    <AppContext.Provider
      value={{
        tarea,
        setTarea,

        listaTareas,
        setListaTareas,

        mostrarFormulario,
        setMostrarFormulario,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<TareasPage />}></Route>
          <Route path="/" element={<LogInPage />}></Route>
          <Route path="/" element={<SignUpPage />}></Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}
