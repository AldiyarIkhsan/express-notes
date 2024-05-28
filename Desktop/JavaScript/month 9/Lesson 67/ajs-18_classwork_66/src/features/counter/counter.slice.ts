import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

interface CounterState {
  value: number;
}

const initCounterState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'Counter',
  initialState: initCounterState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    addValue: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    },
  },
});

export const { decrement, increment, addValue } = counterSlice.actions;

export const selectCounterValue = (state: RootState) => state.value;
