import { useDispatch } from "react-redux";
import { deleteTodo } from "@/store/todos/todosThunks";
import type { Todo } from "@/types/index";
import type { AppDispatch } from "@/store/index";
import { useNavigate } from "react-router-dom";
import { toggleTodoLocal } from "@/store/todos/todosSlice";

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <li className="bg-white p-5 rounded shadow-md">
      <span
        className={`mr-5 cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
        onClick={() => navigate(`/${todo.id}`)}
      >
        {todo.title}
      </span>
      <div className="mt-5">
        <button
          className="cursor-pointer text-slate-500"
          onClick={() => dispatch(toggleTodoLocal(todo.id))}
        >
          {todo.completed ? "Desmarcar" : "Completar"}
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="text-red-500 hover:text-red-700 cursor-pointer ml-5"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};
