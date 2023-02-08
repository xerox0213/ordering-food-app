import { createSlice } from '@reduxjs/toolkit';

const infoSlice = createSlice({
  name: 'info',
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      state.push(action.payload);
    },
    deleteLastMessage: (state, action) => {
      state = [];
      return state;
    },
  },
});

export default infoSlice;
