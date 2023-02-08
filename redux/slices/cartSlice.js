import { createSlice } from '@reduxjs/toolkit';

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
      } else {
        state[indexOfProduct].quantityProduct += 1;
      }
    },
    removeProduct: (state, action) => {
      const idOfProduct = action.payload;
      return state.filter((elem) => elem.id !== idOfProduct);
    },
    modifyQuantityOfProduct: (state, action) => {
      const { idProduct, quantityProduct } = action.payload;
      const indexProduct = state.findIndex((elem) => elem.id === idProduct);
      state[indexProduct].quantityProduct = quantityProduct;
      return state;
    },
    clearCart: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export default cartSlice;
