import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/index";


export const DetailView = () => {
  const { id } = useParams()
  const todos = useSelector((state: RootState) => state.todos.todos);
  const singleTodo = todos.find(t => t.id === id);

  return (
    <div>
    <h1 className="text-2xl font-bold">Titulo: 
      <span className="ml-3 font-medium">{ singleTodo?.title }</span>
    </h1>
    <p className="text-md mt-2 font-bold">Descripción: 
      <span className="text-slate-500 font-medium ml-3">
        { singleTodo?.description }
      </span>
    </p>
    <p className="mt-5 text-md font-bold">
     Estatus: 
     <span 
      className={
        `font medium ml-3 ${singleTodo?.completed 
          ? 'text-green-500' : 'text-amber-500'}`}>
      {
        singleTodo?.completed 
          ? 'Completada'
          : 'Pendiente'
      }
     </span>
    </p>
  </div>
  )
}
