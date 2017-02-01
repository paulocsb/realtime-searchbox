FactoryGirl.define do
  factory :article do
    title { Faker::Lorem.sentence }
    context { Faker::Lorem.sentence }
  end
end
