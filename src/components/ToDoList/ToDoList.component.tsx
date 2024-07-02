import React, { useState, useEffect } from "react";
import { ITodo, TodoListProps } from "../../interfaces/interfaces";
import axios from "../../axios"; // Importamos la instancia de Axios configurada

const ToDoList: React.FC<TodoListProps> = ({ todos, fetchData }) => {
  const [editingTodo, setEditingTodo] = useState<ITodo | null>(null);
  const [localTodos, setLocalTodos] = useState<ITodo[]>(todos);

  useEffect(() => {
    setLocalTodos(todos);
  }, [todos]);

  const deleteTodo = async (id: string) => {
    try {
      await axios.delete(`/tareas/delete/${id}`);
      setLocalTodos(localTodos.filter((todo) => todo._id !== id));
      fetchData();
    } catch (error: any) {
      console.error("Error al eliminar la tarea:", error.message);
    }
  };

  const updateTodo = async (todo: ITodo) => {
    try {
      await axios.put(`/tareas/update/${todo._id}`, todo);
      setLocalTodos(localTodos.map((t) => (t._id === todo._id ? todo : t)));
      fetchData();
      setEditingTodo(null);
    } catch (error: any) {
      console.error("Error al actualizar la tarea:", error.message);
    }
  };

  const completeTodo = async (id: string) => {
    try {
      const updatedTodo = localTodos.find((todo) => todo._id === id);
      if (updatedTodo) {
        const completedTodo = { ...updatedTodo, completado: true };
        await axios.put(`/tareas/update/${id}`, completedTodo);
        setLocalTodos(
          localTodos.map((todo) => (todo._id === id ? completedTodo : todo))
        );
        fetchData();
      }
    } catch (error: any) {
      console.error("Error al completar la tarea:", error.message);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (editingTodo) {
      updateTodo(editingTodo);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-4">
      <h2 className="text-2xl mb-4">Lista de Tareas</h2>
      <ul className="space-y-4">
        {localTodos.map((todo: ITodo) => (
          <li key={todo._id} className="flex flex-col">
            {editingTodo && editingTodo._id === todo._id ? (
              <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                  <label className="text-lg">Título: </label>
                  <input
                    type="text"
                    value={editingTodo.titulo}
                    onChange={(e) =>
                      setEditingTodo({ ...editingTodo, titulo: e.target.value })
                    }
                    className="p-2 rounded-md bg-gray-800 text-white"
                  />
                </div>
                <div>
                  <label className="text-lg">Descripción: </label>
                  <input
                    type="text"
                    value={editingTodo.descripcion}
                    onChange={(e) =>
                      setEditingTodo({
                        ...editingTodo,
                        descripcion: e.target.value,
                      })
                    }
                    className="p-2 rounded-md bg-gray-800 text-white"
                  />
                </div>
                <div>
                  <label className="text-lg">Fecha de Vencimiento: </label>
                  <input
                    type="date"
                    value={editingTodo.fechaDeVencimiento}
                    onChange={(e) =>
                      setEditingTodo({
                        ...editingTodo,
                        fechaDeVencimiento: e.target.value,
                      })
                    }
                    className="p-2 rounded-md bg-gray-800 text-white"
                  />
                </div>
                <div>
                  <label className="text-lg">Estado: </label>
                  <select
                    value={editingTodo.completado ? "Completado" : "Pendiente"}
                    onChange={(e) =>
                      setEditingTodo({
                        ...editingTodo,
                        completado: e.target.value === "Completado",
                      })
                    }
                    className="p-2 rounded-md bg-gray-800 text-white"
                  >
                    <option value="Pendiente">Pendiente</option>
                    <option value="Completado">Completado</option>
                  </select>
                </div>
                <div className="flex space-x-2">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingTodo(null)}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-2">
                <p>
                  <strong className="text-lg">Título:</strong> {todo.titulo}
                </p>
                <p>
                  <strong className="text-lg">Descripción:</strong>{" "}
                  {todo.descripcion}
                </p>
                <p>
                  <strong className="text-lg">Fecha de Vencimiento:</strong>{" "}
                  {todo.fechaDeVencimiento}
                </p>
                <p>
                  <strong className="text-lg">Estado:</strong>{" "}
                  {todo.completado ? "Completado" : "Pendiente"}
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => deleteTodo(todo._id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
                  >
                    Eliminar
                  </button>
                  <button
                    onClick={() => setEditingTodo(todo)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                  >
                    Actualizar
                  </button>
                  <button
                    onClick={() => completeTodo(todo._id)}
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
                  >
                    Completar
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
