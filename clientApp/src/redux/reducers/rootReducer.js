import { combineReducers } from 'redux';
import authReducer from './authReducer';
import comsReducer from './comsReducer';
import loadReducer from './loadReducer';
import postReducers from './postReducer';
import qestionReducer from './qestionReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  qestions: qestionReducer,
  posts: postReducers,
  coms: comsReducer,
  load: loadReducer,
});

export default rootReducer;
