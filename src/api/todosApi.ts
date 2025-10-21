import api from '@/lib/axios'
import type { Todo } from '@/types/index';


export const todosApi = {
  getAll: async (): Promise<Todo[]> => {
    const { data } = await api.get('/todos');
    return data;
  },

  create: async (todo: Omit<Todo, 'id'>): Promise<Todo> => {
    const { data } = await api.post('/todos', todo);
    return data;
  },

  update: async (todo: Todo): Promise<Todo> => {
    const { data } = await api.put(`todos/${todo.id}`, todo);
    return data;
  },

  remove: async (id: string): Promise<string> => {
    await api.delete(`todos/${id}`);
    return id;
  },
};


