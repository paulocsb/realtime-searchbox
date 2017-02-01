FactoryGirl.define do
  factory :search do
  	ip_address { '127.0.0.1' }
    query { Faker::Lorem.sentence(3) }
    searches_count { Faker::Number.between(1, 10) }
  end
end