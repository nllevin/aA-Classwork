const View = require("./ttt-view");
const Game = require("./ttt_node_solution/game");

  $(() => {
    const $el = $(".ttt");
    const game = new Game();
    const view = new View(game, $el);
  });
