import { IFormProps } from "../../interfaces/interfaces";

export default function Form({
  name,
  setName,
  description,
  setDescription,
  date,
  setDate,
  addTodo,
}: IFormProps) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <form className="flex flex-col items-center">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Añade una nueva tarea"
          role="input"
          className="bg-gray-800 text-white rounded-lg px-4 py-2 mb-4 w-full sm:w-auto"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Añade una descripción"
          role="input"
          className="bg-gray-800 text-white rounded-lg px-4 py-2 mb-4 w-full sm:w-auto"
        />
        <input
          value={date ? date.toISOString().split("T")[0] : ""}
          onChange={(e) => setDate(new Date(e.target.value))}
          type="date"
          role="input"
          className="bg-gray-800 text-white rounded-lg px-4 py-2 mb-4 w-full sm:w-auto"
        />
        <button
          type="submit"
          onClick={(e) => addTodo(e)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Añadir
        </button>
      </form>
    </div>
  );
}
