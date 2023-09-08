import { configureStore } from '@reduxjs/toolkit';
import users from './slices/usersSlices';

const store = configureStore({
  reducer: {
    users
  }
});

export default store;
