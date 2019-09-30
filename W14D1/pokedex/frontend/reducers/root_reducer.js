import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import uiReducer from './uiReducer';

export default combineReducers({
  entities: entitiesReducer,
  ui: uiReducer
});