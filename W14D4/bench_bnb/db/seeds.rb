# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all

Bench.create(description: "Wooden bench, outside Zuckerberg SF General", lat: 37.7611215, lng: -122.4177403)
Bench.create(description: "solid bench, 6 legs", lat: 37.736313, lng: -122.413947)
Bench.create(description: "Billy Goat Hill bench", lat: 37.741417, lng: -122.432923)