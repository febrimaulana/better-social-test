import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import post from './post';

const reducer = {
  post,
};

const configReduxPersist = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const reduxPersistReducer = persistCombineReducers(configReduxPersist, reducer);

export default reduxPersistReducer;
