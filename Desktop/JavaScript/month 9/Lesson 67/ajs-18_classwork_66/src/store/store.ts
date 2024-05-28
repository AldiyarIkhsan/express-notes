import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../features/counter/counter.slice';

export const store = configureStore({
  reducer: counterSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
