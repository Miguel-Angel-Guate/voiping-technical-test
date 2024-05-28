export interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }

 export  interface Props {
    todo: Todo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}