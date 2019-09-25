import React from "react";

class Tile extends React.Component {
  constructor(props) { 
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.updateGame(this.props.tile, event.altKey);
  }

  render() {
    let tileText = ""; 
    let className = "tile";
    const { tile } = this.props;
    
    if (tile.flagged) {
      className += " flagged";
      tileText = "🚩";
    } else if (tile.explored && tile.bombed) {
      tileText = "💥"; 
      className += ' bombed explored';
    } else if (tile.explored) { 
      tileText = tile.adjacentBombCount() || "";
      className += " explored";
    } 

    return (
      <div className={ className } onClick={ this.handleClick }>
        { tileText }
      </div>
    );
  }
}

export default Tile;