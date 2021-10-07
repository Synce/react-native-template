import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IMainSlice} from '../../interfaces/silces/IMainSlice';
import {RootState} from '../store';

const initialState: IMainSlice = {
  test: 1,
};

export const MainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setTest(state, action: PayloadAction<number>) {
      state.test += action.payload;
    },
  },

  //   extraReducers: builder => {
  //     builder.addCase(test, state => {});
  //   },
});

export const {setTest} = MainSlice.actions;

export const selectTest = (state: RootState): number => state.main.test;

export default MainSlice.reducer;
