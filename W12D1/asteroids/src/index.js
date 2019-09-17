const GameView = require("./game_view");

window.addEventListener("DOMContentLoaded", event => {
  context = document.getElementById("game-canvas").getContext("2d");
  gv = new GameView(context);
  gv.start();
});
