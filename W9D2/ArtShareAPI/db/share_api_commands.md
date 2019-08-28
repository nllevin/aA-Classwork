Noahs-Air:W9D2 kitty$ cd ArtShareAPI/
Noahs-Air:ArtShareAPI kitty$ rails c
Running via Spring preloader in process 3642
Loading development environment (Rails 5.2.3)
No entry for terminal type "zen_string_literal: true
";
using dumb terminal settings.
[1] pry(main)> User.create!(username: nil)
   (0.2ms)  BEGIN
  User Exists (4.1ms)  SELECT  1 AS one FROM "users" WHERE "users"."username" IS NULL LIMIT $1  [["LIMIT", 1]]
   (0.3ms)  ROLLBACK
ActiveRecord::RecordInvalid: Validation failed: Username can't be blank
from /Users/kitty/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activerecord-5.2.3/lib/active_record/validations.rb:80:in `raise_validation_error'
[2] pry(main)> User.create!(username: "Scooby")
   (0.2ms)  BEGIN
  User Exists (1.3ms)  SELECT  1 AS one FROM "users" WHERE "users"."username" = $1 LIMIT $2  [["username", "Scooby"], ["LIMIT", 1]]
  User Create (5.1ms)  INSERT INTO "users" ("created_at", "updated_at", "username") VALUES ($1, $2, $3) RETURNING "id"  [["created_at", "2019-08-27 17:33:02.903501"], ["updated_at", "2019-08-27 17:33:02.903501"], ["username", "Scooby"]]
   (3.0ms)  COMMIT
=> #<User:0x00007fb0831baf40 id: 6, created_at: Tue, 27 Aug 2019 17:33:02 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:33:02 UTC +00:00, username: "Scooby">
[3] pry(main)> User.create!(username: "Scooby")
   (0.3ms)  BEGIN
  User Exists (1.4ms)  SELECT  1 AS one FROM "users" WHERE "users"."username" = $1 LIMIT $2  [["username", "Scooby"], ["LIMIT", 1]]
   (0.4ms)  ROLLBACK
ActiveRecord::RecordInvalid: Validation failed: Username has already been taken
from /Users/kitty/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activerecord-5.2.3/lib/active_record/validations.rb:80:in `raise_validation_error'
[4] pry(main)> Artwork.create!
   (0.2ms)  BEGIN
  Artwork Exists (2.0ms)  SELECT  1 AS one FROM "artworks" WHERE "artworks"."artist_id" IS NULL AND "artworks"."title" IS NULL LIMIT $1  [["LIMIT", 1]]
   (0.7ms)  ROLLBACK
ActiveRecord::RecordInvalid: Validation failed: Title can't be blank, Artist must exist
from /Users/kitty/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activerecord-5.2.3/lib/active_record/validations.rb:80:in `raise_validation_error'
[5] pry(main)> Artwork.create!(artist_id: 1, title: "Snack")
   (0.3ms)  BEGIN
  Artwork Exists (0.7ms)  SELECT  1 AS one FROM "artworks" WHERE "artworks"."artist_id" = $1 AND "artworks"."title" = $2 LIMIT $3  [["artist_id", 1], ["title", "Snack"], ["LIMIT", 1]]
  User Load (0.4ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 1], ["LIMIT", 1]]
   (0.3ms)  ROLLBACK
ActiveRecord::RecordInvalid: Validation failed: Artist must exist
from /Users/kitty/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activerecord-5.2.3/lib/active_record/validations.rb:80:in `raise_validation_error'
[6] pry(main)> User.first
  User Load (0.5ms)  SELECT  "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
=> #<User:0x00007fb0833452c0 id: 6, created_at: Tue, 27 Aug 2019 17:33:02 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:33:02 UTC +00:00, username: "Scooby">
[7] pry(main)> Artwork.create!(artist_id: 6, title: "Snack")
   (0.5ms)  BEGIN
  Artwork Exists (1.0ms)  SELECT  1 AS one FROM "artworks" WHERE "artworks"."artist_id" = $1 AND "artworks"."title" = $2 LIMIT $3  [["artist_id", 6], ["title", "Snack"], ["LIMIT", 1]]
  User Load (0.6ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 6], ["LIMIT", 1]]
  Artwork Create (6.9ms)  INSERT INTO "artworks" ("title", "artist_id", "created_at", "updated_at") VALUES ($1, $2, $3, $4) RETURNING "id"  [["title", "Snack"], ["artist_id", 6], ["created_at", "2019-08-27 17:35:34.183289"], ["updated_at", "2019-08-27 17:35:34.183289"]]
   (0.2ms)  ROLLBACK
ActiveRecord::NotNullViolation: PG::NotNullViolation: ERROR:  null value in column "image_url" violates not-null constraint
DETAIL:  Failing row contains (1, Snack, null, 6, 2019-08-27 17:35:34.183289, 2019-08-27 17:35:34.183289).
: INSERT INTO "artworks" ("title", "artist_id", "created_at", "updated_at") VALUES ($1, $2, $3, $4) RETURNING "id"
from /Users/kitty/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activerecord-5.2.3/lib/active_record/connection_adapters/postgresql_adapter.rb:611:in `async_exec_params'
Caused by PG::NotNullViolation: ERROR:  null value in column "image_url" violates not-null constraint
DETAIL:  Failing row contains (1, Snack, null, 6, 2019-08-27 17:35:34.183289, 2019-08-27 17:35:34.183289).

from /Users/kitty/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activerecord-5.2.3/lib/active_record/connection_adapters/postgresql_adapter.rb:611:in `async_exec_params'
[8] pry(main)> Artwork.create!                                                       
   (0.8ms)  BEGIN
  Artwork Exists (0.7ms)  SELECT  1 AS one FROM "artworks" WHERE "artworks"."artist_id" IS NULL AND "artworks"."title" IS NULL LIMIT $1  [["LIMIT", 1]]
   (0.3ms)  ROLLBACK
ActiveRecord::RecordInvalid: Validation failed: Title can't be blank, Artist must exist
from /Users/kitty/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activerecord-5.2.3/lib/active_record/validations.rb:80:in `raise_validation_error'
[9] pry(main)> reload!
Reloading...
=> true
[10] pry(main)> Artwork.create!
   (0.3ms)  BEGIN
  Artwork Exists (0.5ms)  SELECT  1 AS one FROM "artworks" WHERE "artworks"."artist_id" IS NULL AND "artworks"."title" IS NULL LIMIT $1  [["LIMIT", 1]]
   (0.3ms)  ROLLBACK
ActiveRecord::RecordInvalid: Validation failed: Title can't be blank, Image url can't be blank, Artist must exist
from /Users/kitty/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activerecord-5.2.3/lib/active_record/validations.rb:80:in `raise_validation_error'
[11] pry(main)> Artwork.create!(artist_id: 6, title: "Snacks", image_url: "image.com")
   (0.3ms)  BEGIN
  Artwork Exists (0.6ms)  SELECT  1 AS one FROM "artworks" WHERE "artworks"."artist_id" = $1 AND "artworks"."title" = $2 LIMIT $3  [["artist_id", 6], ["title", "Snacks"], ["LIMIT", 1]]
  User Load (0.5ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 6], ["LIMIT", 1]]
  Artwork Create (3.5ms)  INSERT INTO "artworks" ("title", "image_url", "artist_id", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["title", "Snacks"], ["image_url", "image.com"], ["artist_id", 6], ["created_at", "2019-08-27 17:39:02.026824"], ["updated_at", "2019-08-27 17:39:02.026824"]]
   (0.6ms)  COMMIT
=> #<Artwork:0x00007fb083d1f4f8 id: 2, title: "Snacks", image_url: "image.com", artist_id: 6, created_at: Tue, 27 Aug 2019 17:39:02 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:39:02 UTC +00:00>
[12] pry(main)> Artwork.create!(artist_id: 6, title: "Snacks", image_url: "image1.com")
   (0.2ms)  BEGIN
  Artwork Exists (0.6ms)  SELECT  1 AS one FROM "artworks" WHERE "artworks"."artist_id" = $1 AND "artworks"."title" = $2 LIMIT $3  [["artist_id", 6], ["title", "Snacks"], ["LIMIT", 1]]
  User Load (0.4ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 6], ["LIMIT", 1]]
   (0.4ms)  ROLLBACK
ActiveRecord::RecordInvalid: Validation failed: Artist should only have one work with a given title
from /Users/kitty/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activerecord-5.2.3/lib/active_record/validations.rb:80:in `raise_validation_error'
[13] pry(main)> User.create!(username: "Shaggy")
   (0.2ms)  BEGIN
  User Exists (0.5ms)  SELECT  1 AS one FROM "users" WHERE "users"."username" = $1 LIMIT $2  [["username", "Shaggy"], ["LIMIT", 1]]
  User Create (0.6ms)  INSERT INTO "users" ("created_at", "updated_at", "username") VALUES ($1, $2, $3) RETURNING "id"  [["created_at", "2019-08-27 17:39:39.360280"], ["updated_at", "2019-08-27 17:39:39.360280"], ["username", "Shaggy"]]
   (0.5ms)  COMMIT
=> #<User:0x00007fb083a66e00 id: 7, created_at: Tue, 27 Aug 2019 17:39:39 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:39:39 UTC +00:00, username: "Shaggy">
[14] pry(main)> Artwork.create!(artist_id: 7, title: "Snacks", image_url: "image1.com")
   (0.2ms)  BEGIN
  Artwork Exists (0.5ms)  SELECT  1 AS one FROM "artworks" WHERE "artworks"."artist_id" = $1 AND "artworks"."title" = $2 LIMIT $3  [["artist_id", 7], ["title", "Snacks"], ["LIMIT", 1]]
  User Load (0.4ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 7], ["LIMIT", 1]]
  Artwork Create (0.4ms)  INSERT INTO "artworks" ("title", "image_url", "artist_id", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["title", "Snacks"], ["image_url", "image1.com"], ["artist_id", 7], ["created_at", "2019-08-27 17:40:07.217128"], ["updated_at", "2019-08-27 17:40:07.217128"]]
   (0.5ms)  COMMIT
=> #<Artwork:0x00007fb083bb0d60 id: 3, title: "Snacks", image_url: "image1.com", artist_id: 7, created_at: Tue, 27 Aug 2019 17:40:07 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:40:07 UTC +00:00>
[15] pry(main)> scooby = User.first
  User Load (0.7ms)  SELECT  "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
=> #<User:0x00007fb082d2dc20 id: 6, created_at: Tue, 27 Aug 2019 17:33:02 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:33:02 UTC +00:00, username: "Scooby">
[16] pry(main)> scooby.artworks
  Artwork Load (0.4ms)  SELECT "artworks".* FROM "artworks" WHERE "artworks"."artist_id" = $1  [["artist_id", 6]]
=> [#<Artwork:0x00007fb082ea30f0 id: 2, title: "Snacks", image_url: "image.com", artist_id: 6, created_at: Tue, 27 Aug 2019 17:39:02 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:39:02 UTC +00:00>]
[17] pry(main)> shaggy = User.last
  User Load (0.6ms)  SELECT  "users".* FROM "users" ORDER BY "users"."id" DESC LIMIT $1  [["LIMIT", 1]]
=> #<User:0x00007fb083da0558 id: 7, created_at: Tue, 27 Aug 2019 17:39:39 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:39:39 UTC +00:00, username: "Shaggy">
[18] pry(main)> shaggy.artworks
  Artwork Load (0.9ms)  SELECT "artworks".* FROM "artworks" WHERE "artworks"."artist_id" = $1  [["artist_id", 7]]
=> [#<Artwork:0x00007fb082e78ee0 id: 3, title: "Snacks", image_url: "image1.com", artist_id: 7, created_at: Tue, 27 Aug 2019 17:40:07 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:40:07 UTC +00:00>]
[19] pry(main)> _.first.artist
  User Load (0.6ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 7], ["LIMIT", 1]]
=> #<User:0x00007fb083d7bb90 id: 7, created_at: Tue, 27 Aug 2019 17:39:39 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:39:39 UTC +00:00, username: "Shaggy">
[20] pry(main)> ArtworkShare.create!
   (0.2ms)  BEGIN
  ArtworkShare Exists (3.7ms)  SELECT  1 AS one FROM "artwork_shares" WHERE "artwork_shares"."artwork_id" IS NULL AND "artwork_shares"."viewer_id" IS NULL LIMIT $1  [["LIMIT", 1]]
   (0.3ms)  ROLLBACK
ActiveRecord::RecordInvalid: Validation failed: Artwork must exist, Viewer must exist
from /Users/kitty/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activerecord-5.2.3/lib/active_record/validations.rb:80:in `raise_validation_error'
[21] pry(main)> ArtworkShare.create!(viewer_id: 6, artwork_id: 3)
   (0.2ms)  BEGIN
  ArtworkShare Exists (1.0ms)  SELECT  1 AS one FROM "artwork_shares" WHERE "artwork_shares"."artwork_id" = $1 AND "artwork_shares"."viewer_id" = $2 LIMIT $3  [["artwork_id", 3], ["viewer_id", 6], ["LIMIT", 1]]
  Artwork Load (0.4ms)  SELECT  "artworks".* FROM "artworks" WHERE "artworks"."id" = $1 LIMIT $2  [["id", 3], ["LIMIT", 1]]
  User Load (0.3ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 6], ["LIMIT", 1]]
  ArtworkShare Create (3.7ms)  INSERT INTO "artwork_shares" ("artwork_id", "viewer_id", "created_at", "updated_at") VALUES ($1, $2, $3, $4) RETURNING "id"  [["artwork_id", 3], ["viewer_id", 6], ["created_at", "2019-08-27 17:42:57.537144"], ["updated_at", "2019-08-27 17:42:57.537144"]]
   (0.5ms)  COMMIT
=> #<ArtworkShare:0x00007fb083c63690 id: 1, artwork_id: 3, viewer_id: 6, created_at: Tue, 27 Aug 2019 17:42:57 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:42:57 UTC +00:00>
[22] pry(main)> ArtworkShare.create!(viewer_id: 6, artwork_id: 3)
   (0.2ms)  BEGIN
  ArtworkShare Exists (1.2ms)  SELECT  1 AS one FROM "artwork_shares" WHERE "artwork_shares"."artwork_id" = $1 AND "artwork_shares"."viewer_id" = $2 LIMIT $3  [["artwork_id", 3], ["viewer_id", 6], ["LIMIT", 1]]
  Artwork Load (0.7ms)  SELECT  "artworks".* FROM "artworks" WHERE "artworks"."id" = $1 LIMIT $2  [["id", 3], ["LIMIT", 1]]
  User Load (0.2ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 6], ["LIMIT", 1]]
   (0.2ms)  ROLLBACK
ActiveRecord::RecordInvalid: Validation failed: Artwork Should not be share with the same user more than once
from /Users/kitty/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activerecord-5.2.3/lib/active_record/validations.rb:80:in `raise_validation_error'
[23] pry(main)> scooby.shares
  ArtworkShare Load (0.6ms)  SELECT "artwork_shares".* FROM "artwork_shares" WHERE "artwork_shares"."viewer_id" = $1  [["viewer_id", 6]]
=> [#<ArtworkShare:0x00007fb082c80b10 id: 1, artwork_id: 3, viewer_id: 6, created_at: Tue, 27 Aug 2019 17:42:57 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:42:57 UTC +00:00>]
[24] pry(main)> scooby.shared_artworks
  Artwork Load (1.1ms)  SELECT "artworks".* FROM "artworks" INNER JOIN "artwork_shares" ON "artworks"."id" = "artwork_shares"."artwork_id" WHERE "artwork_shares"."viewer_id" = $1  [["viewer_id", 6]]
=> [#<Artwork:0x00007fb0829d0b90 id: 3, title: "Snacks", image_url: "image1.com", artist_id: 7, created_at: Tue, 27 Aug 2019 17:40:07 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:40:07 UTC +00:00>]
[25] pry(main)> art1 = _
=> [#<Artwork:0x00007fb0829d0b90 id: 3, title: "Snacks", image_url: "image1.com", artist_id: 7, created_at: Tue, 27 Aug 2019 17:40:07 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:40:07 UTC +00:00>]
[26] pry(main)> art1 = art1.first
=> #<Artwork:0x00007fb0829d0b90 id: 3, title: "Snacks", image_url: "image1.com", artist_id: 7, created_at: Tue, 27 Aug 2019 17:40:07 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:40:07 UTC +00:00>
[27] pry(main)> art1.shares
  ArtworkShare Load (0.4ms)  SELECT "artwork_shares".* FROM "artwork_shares" WHERE "artwork_shares"."artwork_id" = $1  [["artwork_id", 3]]
=> [#<ArtworkShare:0x00007fb083e24218 id: 1, artwork_id: 3, viewer_id: 6, created_at: Tue, 27 Aug 2019 17:42:57 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:42:57 UTC +00:00>]
[28] pry(main)> art1.shared_viewers
  User Load (0.6ms)  SELECT "users".* FROM "users" INNER JOIN "artwork_shares" ON "users"."id" = "artwork_shares"."viewer_id" WHERE "artwork_shares"."artwork_id" = $1  [["artwork_id", 3]]
=> [#<User:0x00007fb0833c1c58 id: 6, created_at: Tue, 27 Aug 2019 17:33:02 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:33:02 UTC +00:00, username: "Scooby">]
[29] pry(main)> ArtworkShare.new(artwork_id: 3, viewer_id: 100)
=> #<ArtworkShare:0x00007fb083e39dc0 id: nil, artwork_id: 3, viewer_id: 100, created_at: nil, updated_at: nil>
[30] pry(main)> scooby
=> #<User:0x00007fb082d2dc20 id: 6, created_at: Tue, 27 Aug 2019 17:33:02 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:33:02 UTC +00:00, username: "Scooby">
[31] pry(main)> scooby.artworks.create!(title: "Snacks 2", image_url: "snacks2.com")
   (3.2ms)  BEGIN
  Artwork Exists (3.2ms)  SELECT  1 AS one FROM "artworks" WHERE "artworks"."artist_id" = $1 AND "artworks"."title" = $2 LIMIT $3  [["artist_id", 6], ["title", "Snacks 2"], ["LIMIT", 1]]
  User Load (0.6ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 6], ["LIMIT", 1]]
  Artwork Create (1.1ms)  INSERT INTO "artworks" ("title", "image_url", "artist_id", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["title", "Snacks 2"], ["image_url", "snacks2.com"], ["artist_id", 6], ["created_at", "2019-08-27 17:55:44.049160"], ["updated_at", "2019-08-27 17:55:44.049160"]]
   (5.1ms)  COMMIT
=> #<Artwork:0x00007fb0833a07d8 id: 4, title: "Snacks 2", image_url: "snacks2.com", artist_id: 6, created_at: Tue, 27 Aug 2019 17:55:44 UTC +00:00, updated_at: Tue, 27 Aug 2019 17:55:44 UTC +00:00>
[32] pry(main)> reload!
Reloading...
=> true
[33] pry(main)> User.all
  User Load (1.0ms)  SELECT "users".* FROM "users"
=> [#<User:0x00007fb08443e5e0 id: 8, created_at: Tue, 27 Aug 2019 18:03:04 UTC +00:00, updated_at: Tue, 27 Aug 2019 18:03:04 UTC +00:00, username: "Scooby">,
 #<User:0x00007fb08443e478 id: 9, created_at: Tue, 27 Aug 2019 18:03:04 UTC +00:00, updated_at: Tue, 27 Aug 2019 18:03:04 UTC +00:00, username: "Shaggy">,
 #<User:0x00007fb08443e338 id: 10, created_at: Tue, 27 Aug 2019 18:03:04 UTC +00:00, updated_at: Tue, 27 Aug 2019 18:03:04 UTC +00:00, username: "Wilma">]
[34] pry(main)> Artwork.all
  Artwork Load (0.5ms)  SELECT "artworks".* FROM "artworks"
=> [#<Artwork:0x00007fb0833fb728 id: 5, title: "Snacks", image_url: "snacks.com", artist_id: 8, created_at: Tue, 27 Aug 2019 18:03:04 UTC +00:00, updated_at: Tue, 27 Aug 2019 18:03:04 UTC +00:00>,
 #<Artwork:0x00007fb0833fb5c0 id: 6, title: "Snacks2", image_url: "snacks.com", artist_id: 8, created_at: Tue, 27 Aug 2019 18:03:04 UTC +00:00, updated_at: Tue, 27 Aug 2019 18:03:04 UTC +00:00>,
 #<Artwork:0x00007fb0833fb480 id: 7, title: "SelfPortrait", image_url: "wilma.com", artist_id: 10, created_at: Tue, 27 Aug 2019 18:03:04 UTC +00:00, updated_at: Tue, 27 Aug 2019 18:03:04 UTC +00:00>]
[35] pry(main)> ArtworkShare.all 
  ArtworkShare Load (4.5ms)  SELECT "artwork_shares".* FROM "artwork_shares"
=> [#<ArtworkShare:0x00007fb08781ab98 id: 2, artwork_id: 5, viewer_id: 9, created_at: Tue, 27 Aug 2019 18:03:04 UTC +00:00, updated_at: Tue, 27 Aug 2019 18:03:04 UTC +00:00>,
 #<ArtworkShare:0x00007fb08781aa30 id: 3, artwork_id: 5, viewer_id: 10, created_at: Tue, 27 Aug 2019 18:03:04 UTC +00:00, updated_at: Tue, 27 Aug 2019 18:03:04 UTC +00:00>,
 #<ArtworkShare:0x00007fb08781a8f0 id: 4, artwork_id: 7, viewer_id: 8, created_at: Tue, 27 Aug 2019 18:03:04 UTC +00:00, updated_at: Tue, 27 Aug 2019 18:03:04 UTC +00:00>]
[36] pry(main)> a = [1,2]
=> [1, 2]
[37] pry(main)> a.concat([3,4])
=> [1, 2, 3, 4]
[38] pry(main)> a
=> [1, 2, 3, 4]
[39] pry(main)> reload!
Reloading...
=> true
[40] pry(main)> u1
NameError: undefined local variable or method `u1' for main:Object
from (pry):40:in `__pry__'
[41] pry(main)> u1 = User.first
  User Load (2.6ms)  SELECT  "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
=> #<User:0x00007fb08349a738 id: 18, created_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00, updated_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00, username: "Scooby">
[42] pry(main)> u1.authored_comments
  Comment Load (1.3ms)  SELECT "comments".* FROM "comments" WHERE "comments"."author_id" = $1  [["author_id", 18]]
=> [#<Comment:0x00007fb083faa4e8
  id: 1,
  body: "Love the selfie! Rooby dooby doo!",
  author_id: 18,
  artwork_id: 17,
  created_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00,
  updated_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00>]
[43] pry(main)> u3 = User.last
  User Load (0.7ms)  SELECT  "users".* FROM "users" ORDER BY "users"."id" DESC LIMIT $1  [["LIMIT", 1]]
=> #<User:0x00007fb0834cab68 id: 20, created_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00, updated_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00, username: "Wilma">
[44] pry(main)> u3.authored_comments
  Comment Load (0.7ms)  SELECT "comments".* FROM "comments" WHERE "comments"."author_id" = $1  [["author_id", 20]]
=> [#<Comment:0x00007fb082c83bf8
  id: 2,
  body: "I can't wait to eat a Snickers!",
  author_id: 20,
  artwork_id: 15,
  created_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00,
  updated_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00>]
[45] pry(main)> u1 = User.find_by(username: "Scooby")
  User Load (0.7ms)  SELECT  "users".* FROM "users" WHERE "users"."username" = $1 LIMIT $2  [["username", "Scooby"], ["LIMIT", 1]]
=> #<User:0x00007fb083aa12f8 id: 18, created_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00, updated_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00, username: "Scooby">
[46] pry(main)> u1.authored_comments
  Comment Load (0.6ms)  SELECT "comments".* FROM "comments" WHERE "comments"."author_id" = $1  [["author_id", 18]]
=> [#<Comment:0x00007fb0841b7df8
  id: 1,
  body: "Love the selfie! Rooby dooby doo!",
  author_id: 18,
  artwork_id: 17,
  created_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00,
  updated_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00>]
[47] pry(main)> a1 = Artwork.first
  Artwork Load (0.6ms)  SELECT  "artworks".* FROM "artworks" ORDER BY "artworks"."id" ASC LIMIT $1  [["LIMIT", 1]]
=> #<Artwork:0x00007fb08786de60 id: 15, title: "Snacks", image_url: "snacks.com", artist_id: 18, created_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00, updated_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00>
[48] pry(main)> a1.comments
  Comment Load (0.4ms)  SELECT "comments".* FROM "comments" WHERE "comments"."artwork_id" = $1  [["artwork_id", 15]]
=> [#<Comment:0x00007fb087864630
  id: 2,
  body: "I can't wait to eat a Snickers!",
  author_id: 20,
  artwork_id: 15,
  created_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00,
  updated_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00>]
[49] pry(main)> a3 = Artwork.last
  Artwork Load (0.4ms)  SELECT  "artworks".* FROM "artworks" ORDER BY "artworks"."id" DESC LIMIT $1  [["LIMIT", 1]]
=> #<Artwork:0x00007fb084504628 id: 17, title: "SelfPortrait", image_url: "wilma.com", artist_id: 20, created_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00, updated_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00>
[50] pry(main)> a3.comments
  Comment Load (0.7ms)  SELECT "comments".* FROM "comments" WHERE "comments"."artwork_id" = $1  [["artwork_id", 17]]
=> [#<Comment:0x00007fb087852778
  id: 1,
  body: "Love the selfie! Rooby dooby doo!",
  author_id: 18,
  artwork_id: 17,
  created_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00,
  updated_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00>]
[51] pry(main)> c1 = Comment.first
  Comment Load (0.4ms)  SELECT  "comments".* FROM "comments" ORDER BY "comments"."id" ASC LIMIT $1  [["LIMIT", 1]]
=> #<Comment:0x00007fb087827c30
 id: 1,
 body: "Love the selfie! Rooby dooby doo!",
 author_id: 18,
 artwork_id: 17,
 created_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00,
 updated_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00>
[52] pry(main)> c1.author
  User Load (0.4ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 18], ["LIMIT", 1]]
=> #<User:0x00007fb083456628 id: 18, created_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00, updated_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00, username: "Scooby">
[53] pry(main)> c1.artwork
  Artwork Load (0.7ms)  SELECT  "artworks".* FROM "artworks" WHERE "artworks"."id" = $1 LIMIT $2  [["id", 17], ["LIMIT", 1]]
=> #<Artwork:0x00007fb087811520 id: 17, title: "SelfPortrait", image_url: "wilma.com", artist_id: 20, created_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00, updated_at: Tue, 27 Aug 2019 21:15:27 UTC +00:00>
[54] pry(main)> query = "lester stone"
=> "lester stone"
[55] pry(main)> chars = query.split("")
=> ["l", "e", "s", "t", "e", "r", " ", "s", "t", "o", "n", "e"]
[56] pry(main)> wildcard_chars = chars.join("%")
=> "l%e%s%t%e%r% %s%t%o%n%e"
[57] pry(main)> query = "%" + wildcard_chars + "%"
=> "%l%e%s%t%e%r% %s%t%o%n%e%"
[58] pry(main)> reload!                                                   
Reloading...
=> true
[59] pry(main)> u1 = User.first
  User Load (0.7ms)  SELECT  "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
=> #<User:0x00007fb083e41480 id: 21, created_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, updated_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, username: "Scooby">
[60] pry(main)> u1.likes
  Like Load (3.0ms)  SELECT "likes".* FROM "likes" WHERE "likes"."liker_id" = $1  [["liker_id", 21]]
=> [#<Like:0x00007fb082f3d970 id: 1, liker_id: 21, likeable_id: 20, likeable_type: "Artwork", created_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, updated_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00>,
 #<Like:0x00007fb082f3d7b8 id: 2, liker_id: 21, likeable_id: 5, likeable_type: "Comment", created_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, updated_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00>]
[61] pry(main)> u1.liked_objects
ActiveRecord::HasManyThroughAssociationPolymorphicSourceError: Cannot have a has_many :through association 'User#liked_objects' on the polymorphic object 'Likeable#likeable' without 'source_type'. Try adding 'source_type: "LikedObject"' to 'has_many :through' definition.
from /Users/kitty/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activerecord-5.2.3/lib/active_record/reflection.rb:932:in `check_validity!'
[62] pry(main)> reload!
Reloading...
=> true
[63] pry(main)> u1 = User.first
  User Load (0.9ms)  SELECT  "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
=> #<User:0x00007fb082d2c870 id: 21, created_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, updated_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, username: "Scooby">
[64] pry(main)> u1.likes
  Like Load (0.9ms)  SELECT "likes".* FROM "likes" WHERE "likes"."liker_id" = $1  [["liker_id", 21]]
=> [#<Like:0x00007fb082c52760 id: 1, liker_id: 21, likeable_id: 20, likeable_type: "Artwork", created_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, updated_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00>,
 #<Like:0x00007fb082c52120 id: 2, liker_id: 21, likeable_id: 5, likeable_type: "Comment", created_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, updated_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00>]
[65] pry(main)> u1.liked_comments
  Comment Load (10.5ms)  SELECT "comments".* FROM "comments" INNER JOIN "likes" ON "comments"."id" = "likes"."likeable_id" WHERE "likes"."liker_id" = $1 AND "likes"."likeable_type" = $2  [["liker_id", 21], ["likeable_type", "Comment"]]
=> [#<Comment:0x00007fb0834a8680
  id: 5,
  body: "I can't wait to eat a Snickers!",
  author_id: 23,
  artwork_id: 18,
  created_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00,
  updated_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00>]
[66] pry(main)> u1.liked_artworks
  Artwork Load (0.8ms)  SELECT "artworks".* FROM "artworks" INNER JOIN "likes" ON "artworks"."id" = "likes"."likeable_id" WHERE "likes"."liker_id" = $1 AND "likes"."likeable_type" = $2  [["liker_id", 21], ["likeable_type", "Artwork"]]
=> [#<Artwork:0x00007fb083efe3f0 id: 20, title: "SelfPortrait", image_url: "wilma.com", artist_id: 23, created_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, updated_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00>]
[67] pry(main)> reload! 
Reloading...
=> true
[68] pry(main)> a3 = Artwork.last
  Artwork Load (0.6ms)  SELECT  "artworks".* FROM "artworks" ORDER BY "artworks"."id" DESC LIMIT $1  [["LIMIT", 1]]
=> #<Artwork:0x00007fb083ea1fd8 id: 20, title: "SelfPortrait", image_url: "wilma.com", artist_id: 23, created_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, updated_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00>
[69] pry(main)> a3.likes
  Like Load (0.4ms)  SELECT "likes".* FROM "likes" WHERE "likes"."likeable_id" = $1 AND "likes"."likeable_type" = $2  [["likeable_id", 20], ["likeable_type", "Artwork"]]
=> [#<Like:0x00007fb0833f0940 id: 1, liker_id: 21, likeable_id: 20, likeable_type: "Artwork", created_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, updated_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00>]
[70] pry(main)> a3.likers
  User Load (0.6ms)  SELECT "users".* FROM "users" INNER JOIN "likes" ON "users"."id" = "likes"."liker_id" WHERE "likes"."likeable_id" = $1 AND "likes"."likeable_type" = $2  [["likeable_id", 20], ["likeable_type", "Artwork"]]
=> [#<User:0x00007fb082eb9648 id: 21, created_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, updated_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, username: "Scooby">]
[71] pry(main)> u1.likes
=> [#<Like:0x00007fb082c52760 id: 1, liker_id: 21, likeable_id: 20, likeable_type: "Artwork", created_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, updated_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00>,
 #<Like:0x00007fb082c52120 id: 2, liker_id: 21, likeable_id: 5, likeable_type: "Comment", created_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, updated_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00>]
[72] pry(main)> Like.create!(liker: u1, likeable: a3)  
ActiveRecord::AssociationTypeMismatch: User(#70198054678780) expected, got #<User id: 21, created_at: "2019-08-27 23:07:50", updated_at: "2019-08-27 23:07:50", username: "Scooby"> which is an instance of User(#70198046157660)
from /Users/kitty/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activerecord-5.2.3/lib/active_record/associations/association.rb:246:in `raise_on_type_mismatch!'
[73] pry(main)> u1
=> #<User:0x00007fb082d2c870 id: 21, created_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, updated_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, username: "Scooby">
[74] pry(main)> a3
=> #<Artwork:0x00007fb083ea1fd8 id: 20, title: "SelfPortrait", image_url: "wilma.com", artist_id: 23, created_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, updated_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00>
[75] pry(main)> reload!
Reloading...
=> true
[76] pry(main)> u1 = User.first
  User Load (0.8ms)  SELECT  "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
=> #<User:0x00007fb083fa0790 id: 21, created_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, updated_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, username: "Scooby">
[77] pry(main)> a3 = Artwork.last
  Artwork Load (0.5ms)  SELECT  "artworks".* FROM "artworks" ORDER BY "artworks"."id" DESC LIMIT $1  [["LIMIT", 1]]
=> #<Artwork:0x00007fb08451c160 id: 20, title: "SelfPortrait", image_url: "wilma.com", artist_id: 23, created_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00, updated_at: Tue, 27 Aug 2019 23:07:50 UTC +00:00>
[78] pry(main)> Like.create!(liker: u1, likeable: a3)
   (0.2ms)  BEGIN
  Like Exists (1.6ms)  SELECT  1 AS one FROM "likes" WHERE "likes"."liker_id" = $1 AND "likes"."likeable_type" = $2 AND "likes"."likeable_id" = $3 LIMIT $4  [["liker_id", 21], ["likeable_type", "Artwork"], ["likeable_id", 20], ["LIMIT", 1]]
   (0.3ms)  ROLLBACK
ActiveRecord::RecordInvalid: Validation failed: Liker should like an artwork or comment only once
from /Users/kitty/.rbenv/versions/2.5.1/lib/ruby/gems/2.5.0/gems/activerecord-5.2.3/lib/active_record/validations.rb:80:in `raise_validation_error'
[79] pry(main)> 