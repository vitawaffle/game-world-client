import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import User from '../../entities/User';
import { RootState } from '../store';

type AuthState = {
  user?: User;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  user: undefined,
  isAuthenticated: false,
};

export const authSlice = createSlice({  
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | undefined>) => {
      const user = action.payload;
      state.user = user;
      state.isAuthenticated = !!user;
    },
  },
});

export default authSlice.reducer;

export const { setUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
