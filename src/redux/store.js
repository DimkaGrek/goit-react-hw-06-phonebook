import { configureStore } from '@reduxjs/toolkit';
import { contactSliceReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactSliceReducer,
    filter: filterReducer,
  },
});
