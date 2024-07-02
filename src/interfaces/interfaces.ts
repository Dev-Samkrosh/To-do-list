export interface IFormProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  addTodo: (e: any) => Promise<void | null>;
}

export interface TodoListProps {
  todos: ITodo[];
  fetchData: () => Promise<void>;
}

// ! Atomic

export interface ITodo {
  _id: string;
  titulo: string;
  descripcion: string;
  fechaDeVencimiento: string;
  completado: boolean;
}
