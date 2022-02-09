import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface ICounterState {
 counter: number;
}

const initialState: ICounterState = {
 counter: 0
};

export const counterSlice = createSlice({
 name: 'counter',
 initialState,
 reducers: {
  increment: (state) => {
   state.counter += 1;
  },
  increment5: (state, action: PayloadAction<number>) => {
   state.counter += action.payload;
  },
  increment10: (state, action: PayloadAction<number>) => {
   state.counter += action.payload;
  },
  reset: (state) => {
   state.counter = 0;
  },
  decrement: (state) => {
   state.counter -= 1;
  },
  decrement5: (state, action: PayloadAction<number>) => {
   state.counter -= action.payload;
  },
  decrement10: (state, action: PayloadAction<number>) => {
   state.counter -= action.payload;
  }
 }
});

export const { increment, increment5, increment10, reset, decrement, decrement5, decrement10 } =
 counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.counter;
export default counterSlice.reducer;
