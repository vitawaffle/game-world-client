import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import User from '../../entity/User';
import { RootState } from '../store';

type AuthState = {
  user?: User;
};

const initialState: AuthState = {
  user: undefined,
};

export const authSlice = createSlice({  
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;

export const { setUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
