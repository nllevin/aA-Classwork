FactoryBot.define do
  factory :goal do
    title {Faker::Marketing.buzzwords}
    body { Faker::ChuckNorris.fact }
    user_id { |n| n }
    private? { false }
    completed? { false }
  end
end
