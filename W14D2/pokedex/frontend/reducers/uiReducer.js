import {combineReducers} from 'redux';
import errorReducer from './errors_reducer';
import loadingReducer from './loading_reducer';

export default combineReducers({
  errors: errorReducer,
  loading: loadingReducer
});