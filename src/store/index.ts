import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import todosReducer from './todos/todosSlice';
import uiReducer from './ui/ui';


export const store = configureStore({
  reducer: {
    todos: todosReducer,
    ui: uiReducer
  }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();