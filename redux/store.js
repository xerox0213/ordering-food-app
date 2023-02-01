import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const idProduct = product.id;
      const indexOfProduct = state.findIndex((elem) => elem.id === idProduct);
      if (indexOfProduct === -1) {
        state.push(product);
      }
    },
    removeProduct: (state, action) => {
      const idOfProduct = action.payload.id;
      return state.filter((elem) => elem.id !== idOfProduct);
    },
    modifyQuantityOfProduct: (state, action) => {},
  },
});

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
