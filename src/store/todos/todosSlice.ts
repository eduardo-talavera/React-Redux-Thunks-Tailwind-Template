import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Todo } from '@/types/index';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './todosThunks';

interface TodosState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleTodoLocal: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
  },
  extraReducers: (builder) => {
    // FETCH
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error al cargar todos';
      });

    // ADD
    builder
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      });

    // UPDATE
    builder
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state.todos[index] = action.payload;
      });

    // DELETE
    builder
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((t) => t.id !== action.payload);
      });
  },
});

export const { toggleTodoLocal } = todosSlice.actions;
export default todosSlice.reducer;
