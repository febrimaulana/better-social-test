import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PostReducer from './post.reducer';

const reducer = {
  PostReducer,
};

const configReduxPersist = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const reduxPersistReducer = persistCombineReducers(configReduxPersist, reducer);

export default reduxPersistReducer;
