import { useDispatch, useSelector } from 'react-redux';
import { type AppDispatch, type RootState } from '@/store/index';
import { TodoItem } from './TodoItem';
import { useEffect } from 'react';
import { fetchTodos } from '@/store/todos/todosThunks';

export const TodoList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { todos, loading, error } = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
      {todos.length === 0 ? (
        <p className="text-gray-500">No hay tareas aún.</p>
      ) : (
        <>
          {loading && <p>Cargando...</p>}
          {error && <p className='text-red-500'>{error}</p>}
          {
            todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          }
        </>
      )}
    </ul>
  );
};
