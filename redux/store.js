import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import cartSlice from './slices/cartSlice';
import infoSlice from './slices/infoSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    info: infoSlice.reducer,
    auth: authSlice.reducer,
  },
});
