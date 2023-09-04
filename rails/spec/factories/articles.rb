FactoryBot.define do
  factory :article do
    user
    title { Faker::Lorem.sentence }
    content { Faker::Lorem.paragraph }
    status { :published }
  end
end
