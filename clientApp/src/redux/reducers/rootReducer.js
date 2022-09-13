import { combineReducers } from 'redux';
import authReducer from './authReducer';
import qestionReducer from './qestionReducer';
import qestionCategoryReducer from './qestionCategoryReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  qestions: qestionReducer,
  qestionCategory: qestionCategoryReducer,
});

export default rootReducer;
