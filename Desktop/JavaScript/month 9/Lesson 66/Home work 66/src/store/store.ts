import { configureStore } from '@reduxjs/toolkit';
import passwordSlice from '../features/counter/password.slice';

export const store = configureStore({
  reducer: {
    password: passwordSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
