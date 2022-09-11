import { combineReducers } from 'redux';
import authReducer from './authReducer';
import qestionReducer from './qestionReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  qestions: qestionReducer,
});

export default rootReducer;
