class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
    this.$el.on("click", ".tower", event => {
      this.clickTower($(event.currentTarget));
    });
  }

  clickTower($tower) {
    if (this.firstTowerClicked === undefined) {
      this.firstTowerClicked = $tower.data("id");
      $tower.addClass("clicked");
    } else {
      if ( !this.game.move(this.firstTowerClicked, $tower.data("id")) ) {
        alert("Invalid move!");
      }
      $(".tower").filter( (_, tower) => $(tower).data("id") === this.firstTowerClicked).removeClass("clicked");
      this.firstTowerClicked = undefined;
      this.render();
    }
  }

  setupTowers() {
    for (let towerIdx = 0; towerIdx < 3; towerIdx++) {
      const $tower = $("<ul>").addClass("tower").data("id", towerIdx);
      $tower.appendTo(this.$el);
      for (let levelIdx = 0; levelIdx < 3; levelIdx++) {
        $("<li>").addClass("level").appendTo($tower);
      }
    }
  }

  render() {
    $(".tower").each( (towerIdx, tower) => {
      const $tower = $(tower);
      $tower.children(".level").each( (levelIdx, level) => {
        const $level = $(level);
        $level.removeClass("disc-size-1 disc-size-2 disc-size-3")
        switch (this.game.towers[towerIdx][levelIdx]) {
          case 1:
            $level.addClass("disc-size-1")
            break;
          case 2:
            $level.addClass("disc-size-2")
            break;
          case 3:
            $level.addClass("disc-size-3")
            break;
        }
      });
    });

    if (this.game.isWon()) {
      $(".tower").addClass("game-over");
      setTimeout( () => alert("You win! Well done!"), 10);
    }
  }
}

module.exports = HanoiView;