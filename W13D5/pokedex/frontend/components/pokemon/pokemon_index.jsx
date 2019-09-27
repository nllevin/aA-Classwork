import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul>
        {
          this.props.pokemon.map(pokemon => (
            <li key={ pokemon.id } >
              <img src={ pokemon.image_url } />
              <span>{ pokemon.name }</span>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default PokemonIndex;