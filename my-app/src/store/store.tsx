import { configureStore } from '@reduxjs/toolkit';
import questionSlice from './questionSlice';
import resultSlice from './resultSlice';

const store = configureStore({
  reducer: {
    questions: questionSlice,
    results: resultSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
