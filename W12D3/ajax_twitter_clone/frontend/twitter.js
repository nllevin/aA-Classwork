const FollowToggle = require("./follow_toggle");
const UsersSearch = require("./users_search");
const TweetCompose = require("./tweet_compose");

$(() => {
  $("button.follow-toggle").each((_, button) => new FollowToggle(button));
  $("nav.users-search").each((_, nav) => new UsersSearch(nav));
  $("form.tweet-compose").each((_, form) => new TweetCompose(form));
});