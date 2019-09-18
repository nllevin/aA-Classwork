class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $(".grid").on("click", ".unmarked", e => {
      const $square = $(e.currentTarget);
      try {
        this.makeMove($square);
        this.game.playMove($square.data("pos"));
        if(this.game.isOver()) {
          this.gameOverBoard();
        }
      } catch (error) {
        alert(error.message);
      }
    });
  }

  gameOverBoard() {
    $(".square").each((_, square) => {
      const $square = $(square);
      if ($square.text() === this.game.winner()) {
        $square.addClass("winner");

      } else {
        $square.addClass("loser");
      }
    });
    const $result = $("<h3>").addClass("result-text");
    this.game.winner() ? $result.text(`You win, ${this.game.winner()}!`): $result.text("It's a Draw =(");
    $result.appendTo($(".ttt"));
  }

  makeMove($square) {
    $square.removeClass("unmarked");
    $square.addClass("marked").text(this.game.currentPlayer);
  }

  setupBoard() {
    $("<ul>").addClass("grid").appendTo(this.$el);
    for (let index = 0; index < 9; index++) {
      $("<li>").addClass("square unmarked").data("pos", [ Math.floor(index / 3), index % 3]).appendTo($(".grid"));
    }
  }
}

module.exports = View;
