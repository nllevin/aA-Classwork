import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';
import errorReducer from './error_reducer';

// const rootReducer = (state = {}, action) => {
//   return {
//     todos: todosReducer(state.todos, action),
//     errors: errorReducer(state.errors, action)
//   };
// };

const rootReducer = combineReducers({
  todos: todosReducer,
  errors: errorReducer
});

export default rootReducer;