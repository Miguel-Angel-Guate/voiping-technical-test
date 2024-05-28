import { Props } from '../inteerface/todoInterface';


const TodoItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <div
            className={`${todo.completed ? 'line-through' : ''} p-2 flex items-center justify-between`}
            style={todo.completed ? { textDecoration: 'line-through' } : {}}
        >
            <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <span className="flex-1 ml-2">{todo.text}</span>
            <button
                className="px-4 py-1 bg-red-500 text-white font-semibold rounded hover:bg-red-600 focus:outline-none focus:shadow-outline"
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </button>
        </div>

    );
};

export default TodoItem;