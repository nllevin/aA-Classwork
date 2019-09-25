import React from "react";
import Tile from "./tile";
 
const Board = function({ board, updateGame }) {
  return (
    <div>
      { 
        board.grid.map( (row, rowIdx) => (
          < div key={ rowIdx } className="row">
            {          
              row.map( (tile, colIdx) => (
                <Tile 
                  key={ colIdx }
                  tile={ tile } 
                  updateGame={ updateGame } // props = { tile: tile, updateGame: updateGame }
                />
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

export default Board; 