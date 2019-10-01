export const selectAllPokemon = state => Object.values(state.entities.pokemon);

export const itemsByPokemonId = (state, pokemonId) => (
  Object.values(state.entities.items).filter(item => item.pokemon_id === pokemonId)
);