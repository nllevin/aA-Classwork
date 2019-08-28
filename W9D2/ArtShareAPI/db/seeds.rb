# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Like.destroy_all
  Comment.destroy_all
  ArtworkShare.destroy_all
  Artwork.destroy_all
  User.destroy_all

  u1 = User.create!(username: "Scooby")
  u2 = User.create!(username: "Shaggy")
  u3 = User.create!(username: "Wilma")

  a1 = u1.artworks.create!(title: "Snacks", image_url: "snacks.com")
  a2 = u1.artworks.create!(title: "Snacks2", image_url: "snacks.com")
  a3 = u3.artworks.create!(title: "SelfPortrait", image_url: "wilma.com")

  a_s1 = ArtworkShare.create!(artwork: a1, viewer: u2)
  a_s2 = ArtworkShare.create!(artwork: a1, viewer: u3)
  a_s3 = ArtworkShare.create!(artwork: a3, viewer: u1)

  c1 = u1.authored_comments.create!(artwork: a3, body: "Love the selfie! Rooby dooby doo!")
  c2 = Comment.create!(artwork: a1, author: u3, body: "I can't wait to eat a Snickers!")

  l1 = Like.create!(liker: u1, likeable: a3)
  l2 = Like.create!(liker: u1, likeable: c2)
end

