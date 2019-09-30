import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  
  switch(action.type){
  case RECEIVE_ALL_POKEMON:
    return merge({}, state, action.pokemon);
  case RECEIVE_SINGLE_POKEMON:
    return Object.assign({}, state, {[action.payload.pokemon.id]: action.payload.pokemon});
  default:
    return state;
  }
}

