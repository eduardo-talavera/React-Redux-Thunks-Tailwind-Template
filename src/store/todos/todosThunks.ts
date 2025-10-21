import { createAsyncThunk } from '@reduxjs/toolkit';
import { todosApi } from '@/api/todosApi';
import { type Todo } from '@/types/index';

export const fetchTodos = createAsyncThunk('todos/fetchAll', async () => {
  const todos = await todosApi.getAll();
  return todos;
});

export const addTodo = createAsyncThunk(
  'todos/add',
  async (todo: Omit<Todo, 'id'>) => {
    const newTodo = await todosApi.create(todo);
    return newTodo;
  }
);

export const updateTodo = createAsyncThunk(
  'todos/update',
  async (todo: Todo) => {
    const updated = await todosApi.update(todo);
    return updated;
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/delete',
  async (id: string) => {
    await todosApi.remove(id);
    return id;
  }
);
