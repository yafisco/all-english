import { useState, FormEvent, ChangeEvent } from "react";

// Type pour les props de TodoItem
type TodoItemProps = {
  todo: string;
  onDelete: () => void;
};

// Composant pour une seule tâche
function TodoItem({ todo, onDelete }: TodoItemProps) {
  return (
    <li className="flex justify-between bg-gray-100 p-2 my-1 rounded">
      {todo}
      <button onClick={onDelete} className="text-red-500 font-bold">
        Supprimer
      </button>
    </li>
  );
}

// Props pour TodoList
type TodoListProps = {
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
};

// Composant pour la liste des tâches
function TodoList({ todos, setTodos }: TodoListProps) {
  const handleDelete = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onDelete={() => handleDelete(index)} />
      ))}
    </ul>
  );
}

// Props pour AddTodo
type AddTodoProps = {
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
};

// Composant pour ajouter une tâche
function AddTodo({ todos, setTodos }: AddTodoProps) {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === "") return;
    setTodos([...todos, text]);
    setText("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Nouvelle tâche"
        className="border p-1 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        Ajouter
      </button>
    </form>
  );
}

// Composant principal
function App() {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Ma Todo List</h1>
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
