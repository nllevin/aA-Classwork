import React from 'react';
import { withRouter } from "react-router-dom";

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      poke_type: "",
      attack: "",
      defense: "",
      moves: ["", ""]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  updateMoves(index) {
    return e => {
      const newMoves = this.state.moves.slice();
      newMoves[index] = e.target.value;
      this.setState({ moves: newMoves });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPokemon(this.state)
      .then(pokemon => this.props.history.push(`/pokemon/${pokemon.id}`));
  }

  render() {
    const pokeTypes = window.POKEMON_TYPES.map((pokeType, idx) => (
      <option value={pokeType} key={idx}>
        { pokeType }
      </option>
    ));
    
    return (
      <form className="pokemon-form" onSubmit={this.handleSubmit}>
        <ul>{this.props.errors.map((error,idx) => <li key={idx}>{error}</li>)}</ul>
        <label htmlFor="name">Name:</label>
        <input 
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.update("name")}
        />

        <label htmlFor="image_url">Image Url:</label>
        <input
          type="text"
          name="image_url"
          value={this.state.image_url}
          onChange={this.update("image_url")}
        />

        <label htmlFor="poke_type">Poke Type</label>
        <select 
          name="poke_type" 
          value={this.state.poke_type} 
          onChange={this.update("poke_type")}
        >
          <option value="" disabled>Please choose a Pokemon type</option>
          {pokeTypes}
        </select>

        <label htmlFor="attack">Attack:</label>
        <input
          type="number"
          name="attack"
          value={this.state.attack}
          onChange={this.update("attack")}
        />

        <label htmlFor="defense">Defense:</label>
        <input
          type="number"
          name="defense"
          value={this.state.defense}
          onChange={this.update("defense")}
        />

        <label htmlFor="move_1">Move 1:</label>
        <input
          type="text"
          name="move_1"
          value={this.state.moves[0]}
          onChange={this.updateMoves(0)}
        />
        <label htmlFor="move_2">Move 2:</label>
        <input 
          type="text"
          name="move_2"
          value={this.state.moves[1]}
          onChange={this.updateMoves(1)}
        />

        <button>Create Pokemon</button>
      </form>
    );
  }
}

export default withRouter(PokemonForm);