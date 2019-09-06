# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Sub.destroy_all
User.destroy_all

u1 = User.create!(username:"kitty", password:"hunter2")

sub1 = Sub.create!(title: "Meow!", description: "Meow meow meow", moderator_id: u1.id)