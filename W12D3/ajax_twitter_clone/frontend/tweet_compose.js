const APIUtil = require("./api_util");

class TweetCompose {
  constructor(form) {
    this.$form = $(form);
    this.$form.on("submit", (event) => { this.submit(event) });
  }

  submit(event) {
    event.preventDefault();
    let data = this.$form.serializeJSON();
    this.$form.find(":input").attr("disabled", true);
    APIUtil.createTweet(data)
      .then((tweet) => { this.handleSuccess(tweet) }, APIUtil.error);
  }

  clearInput() {
    this.$form.find(":input")
      .filter( (_, el) => $(el).attr("type") !== "Submit")
      .val("");
  }

  handleSuccess(tweet) {
    this.clearInput();
    this.$form.find(":input").attr("disabled", false);
    let $tweetsUl = $(this.$form.data("tweets-ul"));
    $tweetsUl.append($("<li>").text(JSON.stringify(tweet)));
  }
}

module.exports = TweetCompose;