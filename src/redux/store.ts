import {configureStore} from '@reduxjs/toolkit';
import tokenReducer from './slice/tokenSlice/tokenSlice';
import profilReducer from './slice/profilSlice/profilSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    profil: profilReducer,
  },
});
