import React, { useEffect, useState } from "react";
import Form from "../Form/Form.component";
import axios from "../../axios";
import ToDoList from "../ToDoList/ToDoList.component";
import NavBar from "../NavBar/NavBar.component";

const ToDo: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [todos, setTodos] = useState([]);

  // Función para obtener las tareas desde el backend
  const fetchData = async () => {
    try {
      const response = await axios.get("/tareas/get");
      setTodos(response.data);
      console.log(todos);
    } catch (error: any) {
      console.error("Error al obtener las tareas:", error.message);
    }
  };

  // Función para agregar una nueva tarea
  const addTodo = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (name.length === 0) return;

    try {
      await axios.post("/tareas/create", {
        titulo: name,
        descripcion: description,
        fechaDeVencimiento: date,
        completado: false,
      });
      fetchData();
      setName("");
      setDescription("");
      setDate(new Date());
      console.log("Tarea añadida correctamente");
    } catch (error: any) {
      console.error("Error al agregar la tarea:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <NavBar />
      <h2 className="text-3xl text-center my-4">ToDo List - Sofka</h2>
      {/* Formulario para agregar nuevas tareas */}
      <Form
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        date={date}
        setDate={setDate}
        addTodo={addTodo}
      />
      {/* Componente para mostrar la lista de tareas */}
      <ToDoList todos={todos} fetchData={fetchData} />
    </div>
  );
};

export default ToDo;
