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
        localStorage.setItem('cart', JSON.stringify(state));
      } else {
        state[indexOfProduct].quantityProduct += 1;
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    removeProduct: (state, action) => {
      const idOfProduct = action.payload;
      state = state.filter((elem) => elem.id !== idOfProduct);
      localStorage.setItem('cart', JSON.stringify(state));
      return state;
    },
    modifyQuantityOfProduct: (state, action) => {
      const { idProduct, quantityProduct } = action.payload;
      const indexProduct = state.findIndex((elem) => elem.id === idProduct);
      state[indexProduct].quantityProduct = quantityProduct;
      localStorage.setItem('cart', JSON.stringify(state));
      return state;
    },
    clearCart: (state, action) => {
      state = action.payload;
      localStorage.setItem('cart', JSON.stringify(state));
      return state;
    },
    synchronizeWithLocalStorage: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export default cartSlice;
