import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/store/todos/todosThunks';
import type { AppDispatch } from '@/store/index';
import type { Todo } from '@/types/index';
import { toast } from 'react-toastify';

export const TodoForm = () => {
  const [todo, setTodo] = useState<Omit<Todo, 'id'>>({
    title: '',
    description: '',
    completed: false
  });
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [name]:value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!todo.title.trim() || !todo.description.trim()) 
      return toast.error('El titulo y la descripción son obligatorios');
    
    dispatch(addTodo(todo));
    setTodo({
      title: '',
      description: '',
      completed: false
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 mb-20">
      <input
        type="text"
        value={todo.title}
        name="title"
        onChange={handleChange}
        className="border border-slate-300 px-2 py-1 rounded"
        placeholder="Titulo de la tarea..."
      />

      <input
        type="text"
        value={todo.description}
        name="description"
        onChange={handleChange}
        className="border border-slate-300 px-2 py-1 rounded"
        placeholder="Descripción de la tarea..."
      />

      <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded cursor-pointer">
        Agregar
      </button>
    </form>
  );
};
