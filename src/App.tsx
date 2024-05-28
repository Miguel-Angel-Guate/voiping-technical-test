import { useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import { Todo } from './inteerface/todoInterface';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    const newTodo: Todo = {
      id: Date.now(), // simple ID generation
      text: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTask('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  return (
    <div className='max-w-xl mx-auto p-4 bg-gray-100 rounded-lg shadow'>
      <input
        className='w-full p-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className='mt-2 w-full p-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline'
        onClick={addTask}
      >
        Add Task
      </button>
  
      {todos.sort((a, b) => Number(a.completed) - Number(b.completed)).map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
  
}

export default App
