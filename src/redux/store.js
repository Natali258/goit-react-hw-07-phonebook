import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './contacts/slice';
import { filterValueReducer } from './filterSlice/filterSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'contactsItem',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, phoneBookReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterValueReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
