FactoryBot.define do
  factory :user do
    username { Faker::Games::Pokemon.name }
    password { "hunter2" }
  end
end
