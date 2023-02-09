import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      state = action.payload;
      return state;
    },
    clearUser: (state, action) => {
      state = null;
      return state;
    },
  },
});

export default authSlice;
