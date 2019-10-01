import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemonItems = this.props.pokemon.map(pokemon => (
      <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
    ));
    
    if (Object.keys(this.props.pokemon).length === 0 && this.props.loading) {
      return (
        <div id="loading-pokeball-container">
          <div id="loading-pokeball"></div>
        </div>
      );
    }

    return (
      <section className="pokedex">
        <ul>{ pokemonItems }</ul>
        <section className="pokedex-main-section">
          <img src="http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png" alt="" /> 
          <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
          <Route exact path="/" component={PokemonFormContainer} />
        </section>
      </section>
    );
  }
}

export default PokemonIndex;