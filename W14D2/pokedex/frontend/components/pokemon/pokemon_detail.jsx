import React from 'react';
import { Route, Link } from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.pokemonId !== prevProps.match.params.pokemonId){
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }

  render() {
    debugger;
    const {pokemon, items} = this.props;

    if (!pokemon || !pokemon.moves) {
      return (
          <div id="loading-pokeball-container">
            <div id="loading-pokeball"></div>
          </div>
      );
    }

    
    const heldItems = items.map(item =>(
      <li key={item.id}>
        <Link to={`/pokemon/${pokemon.id}/items/${item.id}`}>
          <img src={item.image_url}/>
        </Link>
      </li>
    ));


    return(
      <div className="pokemon-detail">
        <figure>
          <img src={pokemon.image_url}/>
        </figure>
        <ul>
          <li><h2>{ pokemon.name }</h2></li>
          <li>Type: { pokemon.poke_type }</li>
          <li>Attack: { pokemon.attack }</li>
          <li>Defense: { pokemon.defense }</li>
          <li>Moves: { pokemon.moves.join(", ") }</li>
        </ul>
        <section className="toys">
          <h3>Items</h3>
          <ul>
            {heldItems}
          </ul>
          <Route 
            path="/pokemon/:pokemonId/items/:itemId"
            component={ItemDetailContainer}
          />
        </section>
      </div>
    )
  }
}

export default PokemonDetail;