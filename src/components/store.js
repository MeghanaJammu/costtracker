import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './redux/itemsSlice';

export const store = configureStore({
  reducer: {
    projectItems: itemsReducer,
  },
});
