import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

const CORRECT_PIN = '1337';

interface PasswordState {
  value: string;
  status: 'idle' | 'granted' | 'denied';
}

const initialState: PasswordState = {
  value: '',
  status: 'idle',
};

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<string>) => {
      if (state.value.length < 4) {
        state.value += action.payload;
      }
    },
    deleteCharacter: (state) => {
      state.value = state.value.slice(0, -1);
    },
    validatePassword: (state) => {
      if (state.value === CORRECT_PIN) {
        state.status = 'granted';
      } else {
        state.status = 'denied';
      }
    },
    resetStatus: (state) => {
      state.status = 'idle';
      state.value = '';
    },
  },
});

export const { addCharacter, deleteCharacter, validatePassword, resetStatus } = passwordSlice.actions;

export const selectPasswordValue = (state: RootState) => state.password.value;
export const selectPasswordStatus = (state: RootState) => state.password.status;

export default passwordSlice.reducer;
