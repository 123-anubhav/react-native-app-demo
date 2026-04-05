import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 8,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    buyPizza: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
  },
});

export const { buyPizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;