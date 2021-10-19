import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'biome',
      storage: AsyncStorage,
      whitelist: ['auth', 'user'],
      timeout: 0,
    },
    reducers
  );

  return persistedReducer;
};
